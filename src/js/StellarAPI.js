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

  balances(publicKey) {
    return this.server().loadAccount(publicKey)
      .then((account) => {
        const result = {}

        account.balances.forEach((balance) => {
          if (balance.asset_type === 'native') {
            result['XLM'] = balance.balance
          } else {
            result[balance.asset_code] = balance.balance
          }
        })

        return result
      })
  }

  paths(sourceKey, destinationPublic, destinationAsset, destinationAmount) {
    return this.server().paths(sourceKey, destinationPublic, destinationAsset, destinationAmount)
  }

  mergeAccount(sourceWallet, destKey) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.accountMerge({
            destination: destKey
          })).build()

        return sourceWallet.signTransaction(transaction)
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

  changeTrust(sourceWallet, asset, limit) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.changeTrust({
            asset: asset,
            limit: limit
          })).build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
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
  makeMultiSig(sourceWallet, secondPublicKey, threshold = 2) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
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

  sendAsset(sourceWallet, fundingWallet, destKey, amount, inAsset = null, memo = null, additionalSigners = null) {
    const asset = inAsset === null ? StellarSdk.Asset.native() : inAsset

    return this.server().loadAccount(destKey)
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

  createAccount(sourceWallet, destinationKey, startingBalance) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const options = {
          destination: destinationKey,
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
        return this.server().loadAccount(destinationKey)
      })
  }

  lockAccount(sourceWallet) {
    const options = {
      masterWeight: 0, // set master key weight to zero
      lowThreshold: 1,
      medThreshold: 1,
      highThreshold: 1
    }

    return this.setOptions(sourceWallet, options)
  }

  setDomain(sourceWallet, domain) {
    const options = {
      homeDomain: domain
    }

    return this.setOptions(sourceWallet, options)
  }

  setFlags(sourceWallet, flags) {
    const options = {
      setFlags: flags
    }

    return this.setOptions(sourceWallet, options)
  }

  clearFlags(sourceWallet, flags) {
    const options = {
      clearFlags: flags
    }

    return this.setOptions(sourceWallet, options)
  }

  setInflationDestination(sourceWallet, inflationDest) {
    const options = {
      inflationDest: inflationDest
    }

    return this.setOptions(sourceWallet, options)
  }

  setOptions(sourceWallet, options) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.setOptions(options))
          .build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.submitTransaction(signedTransaction)
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

  _manageDataOperation(name, value, sourcePublicKey = null) {
    const opts = {
      name: name,
      value: Utils.strOK(value) ? value : null, // pass null to remove name/value
      source: sourcePublicKey
    }

    return StellarSdk.Operation.manageData(opts)
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
