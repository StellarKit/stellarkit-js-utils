const StellarSdk = require('stellar-sdk')
import axios from 'axios'
import Utils from './utils.js'
import StellarOperations from './StellarOperations.js'

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
              amount: balance.balance,
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
        const operation = StellarOperations.manageOfferOperation(buying, selling, amount, price, offerID, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo)
      })
  }

  changeTrust(sourceWallet, fundingWallet, asset, limit) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = StellarOperations.changeTrustOperation(asset, limit, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo)
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
  makeMultiSig(sourceWallet, secondWallet, fundingWallet = null, threshold = 2) {
    let secondPublicKey = null

    return secondWallet.publicKey()
      .then((publicKey) => {
        secondPublicKey = publicKey

        return this._processAccounts(sourceWallet, fundingWallet)
      })
      .then((accountInfo) => {
        const operations = StellarOperations.multisigOperations(secondPublicKey, 1, threshold, threshold, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, operations, accountInfo)
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
        const builder = new StellarSdk.TransactionBuilder(sourceAccount, transactionOpts)

        const operations = StellarOperations.removeMultisigOperations(secondPublicKey, 1, 1, null)
        for (const operation of operations) {
          builder.addOperation(operation)
        }

        const transaction = builder.build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return secondWallet.signTransaction(signedTransaction)
      })
  }

  sendAssetBatch(sourceWallet, fundingWallet, destWallets, amount, inAsset = null, memo = null, additionalSigners = null) {
    const asset = inAsset === null ? StellarSdk.Asset.native() : inAsset
    let destKey = null
    const operations = []

    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        let nextPromise = Promise.resolve()

        for (const destWallet of destWallets) {
          nextPromise = nextPromise.then(() => {
              return destWallet.publicKey()
            })
            .then((publicKey) => {
              destKey = publicKey
              return this.server().loadAccount(destKey)
            })
            .then((destAccount) => {
              // dest has a trustline?
              if (!this._hasAssetTrustline(destAccount, asset)) {
                throw new Error('No trustline from destination to asset')
              }
              return null
            })
            .then(() => {
              const operation = StellarOperations.paymentOperation(destKey, amount, asset, accountInfo.sourcePublicKey)
              operations.push(operation)
              return null
            })
        }

        return nextPromise.then(() => {
          return this._submitOperations(sourceWallet, fundingWallet, operations, accountInfo, memo, additionalSigners)
        })
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
        const operation = StellarOperations.paymentOperation(destKey, amount, asset, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo, memo, additionalSigners)
      })
  }

  buyTokens(sourceWallet, sendAsset, destAsset, sendMax, destAmount, fundingWallet = null, additionalSigners = null) {
    let sourcePublicKey = null

    return sourceWallet.publicKey()
      .then((publicKey) => {
        sourcePublicKey = publicKey
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        if (!this._hasAssetTrustline(account, destAsset)) {
          throw new Error('No trustline from buyer to asset')
        }

        return this._processAccounts(sourceWallet, fundingWallet)
      })
      .then((accountInfo) => {
        const operation = StellarOperations.pathPaymentOperation(sourcePublicKey, sendAsset, sendMax, destAsset, destAmount, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo, null, additionalSigners)
      })
  }

  manageData(sourceWallet, fundingWallet, name, value, additionalSigners = null) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = StellarOperations.manageDataOperation(name, value, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo, null, additionalSigners)
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

  lockAccount(sourceWallet, fundingWallet = null, additionalSigners = null) {
    const options = {
      masterWeight: 0, // set master key weight to zero
      lowThreshold: 1,
      medThreshold: 1,
      highThreshold: 1
    }

    return this.setOptions(sourceWallet, options, fundingWallet, additionalSigners)
  }

  setDomain(sourceWallet, domain, fundingWallet = null, additionalSigners = null) {
    const options = {
      homeDomain: domain
    }

    return this.setOptions(sourceWallet, options, fundingWallet, additionalSigners)
  }

  setFlags(sourceWallet, flags, fundingWallet = null, additionalSigners = null) {
    const options = {
      setFlags: flags
    }

    return this.setOptions(sourceWallet, options, fundingWallet, additionalSigners)
  }

  clearFlags(sourceWallet, flags, fundingWallet = null, additionalSigners = null) {
    const options = {
      clearFlags: flags
    }

    return this.setOptions(sourceWallet, options, fundingWallet, additionalSigners)
  }

  setInflationDestination(sourceWallet, inflationDest, fundingWallet = null, additionalSigners = null) {
    const options = {
      inflationDest: inflationDest
    }

    return this.setOptions(sourceWallet, options, fundingWallet, additionalSigners)
  }

  setOptions(sourceWallet, options, fundingWallet = null, additionalSigners = null) {
    return this._processAccounts(sourceWallet, fundingWallet)
      .then((accountInfo) => {
        const operation = StellarOperations.setOptionsOperation(options, accountInfo.sourcePublicKey)

        return this._submitOperations(sourceWallet, fundingWallet, [operation], accountInfo, null, additionalSigners)
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

  _submitOperations(sourceWallet, fundingWallet, operations, accountInfo, memo = null, additionalSigners = null) {
    const builder = new StellarSdk.TransactionBuilder(accountInfo.account)

    for (const operation of operations) {
      builder.addOperation(operation)
    }

    if (Utils.strOK(memo)) {
      builder.addMemo(StellarSdk.Memo.text(memo))
    }

    const transaction = builder.build()

    return sourceWallet.signTransaction(transaction)
      .then((signedTx) => {
        // don't sign if funder and source are the same
        if (fundingWallet && !fundingWallet.equalTo(sourceWallet)) {
          return fundingWallet.signTransaction(signedTx)
        }

        return signedTx
      })
      .then((signedTx) => {
        if (additionalSigners && additionalSigners.length > 0) {
          // will fail if additional signers also include the source and funding
          const excludeList = []
          excludeList.push(sourceWallet)

          if (fundingWallet) {
            excludeList.push(fundingWallet)
          }

          const signers = this._filteredSigners(additionalSigners, excludeList)

          let nextPromise = Promise.resolve()

          for (const signerWallet of signers) {
            nextPromise = nextPromise.then(() => {
              return signerWallet.signTransaction(signedTx)
            })
          }

          return nextPromise.then((signedTxMore) => {
            return this.submitTransaction(signedTxMore)
          })
        }

        return this.submitTransaction(signedTx)
      })
  }

  _filteredSigners(signers, excludeList) {
    let result = signers

    if (signers && signers.length > 0 && excludeList && excludeList.length > 0) {
      result = []

      for (const signer of signers) {
        let found = false

        for (const exclude of excludeList) {
          if (signer.equalTo(exclude)) {
            found = true
            break
          }
        }

        if (!found) {
          result.push(signer)
        }
      }
    }

    return result
  }
}