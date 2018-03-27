const StellarSdk = require('stellar-sdk')
import axios from 'axios'
import Utils from './utils.js'

export default class StellarAPI {
  constructor(horizonServer) {
    if (!horizonServer) {
      console.log('StellarAPI constructor missing parameter')
    }

    this._horizonServer = horizonServer
  }

  server() {
    return this._horizonServer.server()
  }

  serverURL() {
    return this._horizonServer.serverURL()
  }

  horizonMetrics() {
    const url = this.serverURL() + '/metrics'

    return axios.get(url)
  }

  accountInfo(publicKey) {
    return this.server().loadAccount(publicKey)
  }

  balances(sourceWallet) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const result = []

        account.balances.forEach((balance) => {
          if (balance.asset_type === 'native') {
            result.push({
              symbol: 'XLM',
              balance: balance.balance,
              issuer: ''
            })
          } else {
            result.push({
              symbol: balance.asset_code,
              amount: balance.balance,
              issuer: balance.asset_issuer
            })
          }
        })

        return result
      })
  }

  // returns a string, not a float
  balanceForAsset(sourceWallet, asset) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        for (const balance of account.balances) {
          if (balance.asset_type === 'native') {
            if (asset.isNative()) {
              return balance.balance
            }
          } else {
            if (balance.asset_code === asset.getCode() && balance.asset_issuer === asset.getIssuer()) {
              return balance.balance
            }
          }
        }

        return '0'
      })
  }

  paths(sourceKey, destinationPublic, destinationAsset, destinationAmount) {
    return this.server().paths(sourceKey, destinationPublic, destinationAsset, destinationAmount)
  }

  mergeAccount(sourceWallet, destWallet) {
    let sourcePublicKey = ''
    let destPublicKey = ''

    return sourceWallet.publicKey()
      .then((publicKey) => {
        sourcePublicKey = publicKey

        return destWallet.publicKey()
      })
      .then((publicKey) => {
        destPublicKey = publicKey

        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        // we are using the destWallet to perform the transaction
        // the source wallet could have 1 XLM which would fail tx_insufficient_balance
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.accountMerge({
            destination: destPublicKey,
            source: sourcePublicKey
          })).build()

        return destWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        // must also sign by source
        return sourceWallet.signTransaction(signedTransaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
      })
  }

  // fundingWallet is normally null unless you want to pay with a different accout for the sourceWallet Account
  manageOffer(sourceWallet, fundingWallet, buying, selling, amount, price, offerID = 0) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = this._manageOfferOperation(buying, selling, amount, price, offerID, accountInfo.sourcePublicKey)

        return this._submitOperation(sourceWallet, fundingWallet, operation, accountInfo)
      })
  }

  changeTrust(sourceWallet, fundingWallet, asset, limit) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = this._changeTrustOperation(asset, limit, accountInfo.sourcePublicKey)

        return this._submitOperation(sourceWallet, fundingWallet, operation, accountInfo)
      })
  }

  allowTrust(sourceWallet, trustor, asset, authorize) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.allowTrust({
            trustor: trustor,
            assetCode: asset.getCode(),
            authorize: authorize
          }))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
      })
  }

  // pass 1 for threshold if either account can sign for med/high operations
  makeMultiSig(sourceWallet, secondWallet, threshold = 2) {
    let sourceAccount = null

    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        sourceAccount = account

        return secondWallet.publicKey()
      })
      .then((secondPublicKey) => {
        const transaction = new StellarSdk.TransactionBuilder(sourceAccount)
          .addOperation(StellarSdk.Operation.setOptions({
            signer: {
              ed25519PublicKey: secondPublicKey,
              weight: 1
            }
          }))
          .addOperation(StellarSdk.Operation.setOptions({
            medThreshold: threshold,
            highThreshold: threshold
          }))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
      })
  }

  removeMultiSig(sourceWallet, secondWallet, transactionOpts) {
    return this.removeMultiSigTransaction(sourceWallet, secondWallet, transactionOpts)
      .then((transaction) => {
        return this.submitTransaction(transaction)
      })
  }

  submitTransaction(transaction) {
    return this.server().submitTransaction(transaction)
  }

  removeMultiSigTransaction(sourceWallet, secondWallet, transactionOpts) {
    let sourceAccount = null

    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        sourceAccount = account

        return secondWallet.publicKey()
      })
      .then((secondPublicKey) => {
        const transaction = new StellarSdk.TransactionBuilder(sourceAccount, transactionOpts)
          .addOperation(StellarSdk.Operation.setOptions({
            medThreshold: 1,
            highThreshold: 1
          }))
          .addOperation(StellarSdk.Operation.setOptions({
            signer: {
              ed25519PublicKey: secondPublicKey,
              weight: 0
            }
          }))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return secondWallet.signTransaction(signedTransaction)
      })
  }

  sendAsset(sourceWallet, fundingWallet, destWallet, amount, inAsset = null, memo = null, additionalSigners = null) {
    const asset = inAsset === null ? StellarSdk.Asset.native() : inAsset
    let destKey = null

    return destWallet.publicKey()
      .then((publicKey) => {
        destKey = publicKey
        return this.server().loadAccount(destKey)
      })
      .then((destAccount) => {
        // dest has a trustline?
        if (!this._hasAssetTrustline(destAccount, asset)) {
          throw new Error('No trustline from destination to asset')
        }

        return this._processAccounts(sourceWallet, fundingWallet)
      })
      .then((accountInfo) => {
        const operation = this._paymentOperation(destKey, amount, asset, accountInfo.sourcePublicKey)

        return this._submitOperation(sourceWallet, fundingWallet, operation, accountInfo, memo, additionalSigners)
      })
  }

  buyTokens(sourceWallet, sendAsset, destAsset, sendMax, destAmount) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        if (!this._hasAssetTrustline(account, destAsset)) {
          throw new Error('No trustline from buyer to asset')
        }

        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(
            StellarSdk.Operation.pathPayment({
              destination: account.accountId(),
              sendAsset: sendAsset,
              sendMax: sendMax,
              destAsset: destAsset,
              destAmount: destAmount,
              path: []
            }))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
      })
  }

  manageData(sourceWallet, fundingWallet, name, value) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = this._manageDataOperation(name, value, accountInfo.sourcePublicKey)

        return this._submitOperation(sourceWallet, fundingWallet, operation, accountInfo)
      })
  }

  getFlags(sourceWallet) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        let result = 0

        if (account.flags.auth_required) {
          result |= StellarSdk.AuthRequiredFlag
        }
        if (account.flags.auth_revocable) {
          result |= StellarSdk.AuthRevocableFlag
        }

        return result
      })
  }

  createAccount(sourceWallet, newWallet, startingBalance) {
    let newKey

    return newWallet.publicKey()
      .then((publicKey) => {
        newKey = publicKey

        return sourceWallet.publicKey()
      })
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const options = {
          destination: newKey,
          startingBalance: startingBalance
        }

        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.createAccount(options))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
      })
      .then((response) => {
        return this.server().loadAccount(newKey)
      })
  }

  lockAccount(sourceWallet, fundingWallet = null) {
    const options = {
      masterWeight: 0, // set master key weight to zero
      lowThreshold: 1,
      medThreshold: 1,
      highThreshold: 1
    }

    return this.setOptions(sourceWallet, options, fundingWallet)
  }

  setDomain(sourceWallet, domain, fundingWallet = null) {
    const options = {
      homeDomain: domain
    }

    return this.setOptions(sourceWallet, options, fundingWallet)
  }

  setFlags(sourceWallet, flags, fundingWallet = null) {
    const options = {
      setFlags: flags
    }

    return this.setOptions(sourceWallet, options, fundingWallet)
  }

  clearFlags(sourceWallet, flags, fundingWallet = null) {
    const options = {
      clearFlags: flags
    }

    return this.setOptions(sourceWallet, options, fundingWallet)
  }

  setInflationDestination(sourceWallet, inflationDest, fundingWallet = null) {
    const options = {
      inflationDest: inflationDest
    }

    return this.setOptions(sourceWallet, options, fundingWallet)
  }

  setOptions(sourceWallet, options, fundingWallet = null) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = this._setOptionsOperation(options, accountInfo.sourcePublicKey)

        return this._submitOperation(sourceWallet, fundingWallet, operation, accountInfo)
      })
  }

  // ======================================================================
  // Private
  // ======================================================================

  _hasAssetTrustline(account, asset) {
    if (asset.isNative()) {
      return true
    }

    return account.balances.some((balance) => {
      return balance.asset_code === asset.getCode() &&
        balance.asset_issuer === asset.getIssuer()
    })
  }

  _paymentOperation(destKey, amount, asset, sourcePublicKey) {
    const opts = {
      destination: destKey,
      asset: asset,
      amount: amount,
      source: sourcePublicKey
    }

    return StellarSdk.Operation.payment(opts)
  }

  _manageOfferOperation(buying, selling, amount, price, offerID = 0, sourcePublicKey = null) {
    const opts = {
      selling: selling,
      buying: buying,
      amount: amount,
      price: price,
      offerId: offerID,
      source: sourcePublicKey
    }
    return StellarSdk.Operation.manageOffer(opts)
  }

  _setOptionsOperation(options, sourcePublicKey = null) {
    const opts = options

    // just need to add the source public key to passed in options
    opts.source = sourcePublicKey

    return StellarSdk.Operation.setOptions(opts)
  }

  _manageDataOperation(name, value, sourcePublicKey = null) {
    const opts = {
      name: name,
      value: Utils.strOK(value) ? value : null, // pass null to remove name/value
      source: sourcePublicKey
    }

    return StellarSdk.Operation.manageData(opts)
  }

  _changeTrustOperation(asset, limit, sourcePublicKey = null) {
    const opts = {
      asset: asset,
      limit: limit,
      source: sourcePublicKey
    }

    return StellarSdk.Operation.changeTrust(opts)
  }

  _processAccounts(sourceWallet, fundingWallet) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        if (fundingWallet) {
          return fundingWallet.publicKey()
            .then((fundingPublicKey) => {
              return {
                sourcePublicKey: publicKey,
                fundingPublicKey: fundingPublicKey
              }
            })
        }

        return {
          sourcePublicKey: publicKey
        }
      })
      .then((result) => {
        let publicKey = result.sourcePublicKey
        if (result.fundingPublicKey) {
          publicKey = result.fundingPublicKey
        }

        return this.server().loadAccount(publicKey)
          .then((account) => {
            result.account = account

            return result
          })
      })
  }

  _submitOperation(sourceWallet, fundingWallet, operation, accountInfo, memo = null, additionalSigners = null) {
    const builder = new StellarSdk.TransactionBuilder(accountInfo.account)
      .addOperation(operation)

    if (Utils.strOK(memo)) {
      builder.addMemo(StellarSdk.Memo.text(memo))
    }

    const transaction = builder.build()

    return sourceWallet.signTransaction(transaction)
      .then((signedTx) => {
        if (fundingWallet) {
          return fundingWallet.signTransaction(signedTx)
        }

        return signedTx
      })
      .then((signedTx) => {
        if (additionalSigners) {
          return this._signTransactionWithArray(signedTx, additionalSigners)
            .then((signedTxMore) => {
              return this.submitTransaction(signedTxMore)
            })
        }

        return this.submitTransaction(signedTx)
      })
  }

  _signTransactionWithArray(transaction, signers) {
    const signerWallet = signers.pop()

    if (signerWallet) {
      return signerWallet.signTransaction(transaction)
        .then((signedTramsaction) => {
          return this._signTransactionWithArray(signedTramsaction, signers)
        })
    } else {
      return Promise.resolve(transaction)
    }
  }
}