const StellarSdk = require('stellar-sdk')
import axios from 'axios'

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
        return this.server().submitTransaction(signedTransaction)
      })
  }

  manageOffer(sourceWallet, buying, selling, amount, price, offerID = 0) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.manageOffer({
            selling: selling,
            buying: buying,
            amount: amount,
            price: price,
            offerId: offerID
          })).build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        return this.server().submitTransaction(signedTransaction)
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
        return this.server().submitTransaction(signedTransaction)
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
        return this.server().submitTransaction(signedTransaction)
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
        return this.server().submitTransaction(signedTransaction)
      })
  }

  removeMultiSig(sourceWallet, secondSecret, secondPublicKey, transactionOpts) {
    return this.removeMultiSigTransaction(sourceWallet, secondSecret, secondPublicKey, transactionOpts)
      .then((transaction) => {
        return this.server().submitTransaction(transaction)
      })
  }

  submitTransaction(transaction) {
    return this.server().submitTransaction(transaction)
  }

  removeMultiSigTransaction(sourceWallet, secondSecret, secondPublicKey, transactionOpts) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account, transactionOpts)
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
        signedTransaction.sign(StellarSdk.Keypair.fromSecret(secondSecret))

        return signedTransaction
      })
  }

  signTransactionWithArray(transaction, signers) {
    return new Promise((resolve, reject) => {
      const signerWallet = signers.pop()

      if (signerWallet) {
        signerWallet.signTransaction(transaction)
          .then((signedTramsaction) => {
            resolve(this.signTransactionWithArray(signedTramsaction, signers))
          })
          .catch((error) => {
            console.log(JSON.stringify(error))

            reject(error)
          })
      } else {
        resolve(transaction)
      }
    })
  }

  sendAsset(sourceWallet, destKey, amount, asset = null, memo = null, additionalSigners = null) {
    return this.server().loadAccount(destKey)
      .then((destAccount) => {
        // dest account exists
        return sourceWallet.publicKey()
      })
      .then((sourcePublicKey) => {
        return this.server().loadAccount(sourcePublicKey)
      })
      .then((sourceAccount) => {
        let builder = new StellarSdk.TransactionBuilder(sourceAccount)
          .addOperation(StellarSdk.Operation.payment({
            destination: destKey,
            asset: asset === null ? StellarSdk.Asset.native() : asset,
            amount: amount
          }))

        if (memo) {
          builder = builder.addMemo(StellarSdk.Memo.text(memo))
        }

        const transaction = builder.build()

        return sourceWallet.signTransaction(transaction)
      })
      .then((signedTransaction) => {
        if (!additionalSigners) {
          return this.server().submitTransaction(signedTransaction)
        } else {
          this.signTransactionWithArray(signedTransaction, additionalSigners)
            .then((additionalSignedTransaction) => {
              return this.server().submitTransaction(additionalSignedTransaction)
            })
        }
      })
  }

  hasAssetTrustline(account, asset) {
    let trusted = false
    trusted = account.balances.some((balance) => {
      return balance.asset_code === asset.getCode() &&
        balance.asset_issuer === asset.getIssuer()
    })

    return trusted
  }

  buyTokens(sourceWallet, sendAsset, destAsset, sendMax, destAmount) {
    return sourceWallet.publicKey()
      .then((publicKey) => {
        return this.server().loadAccount(publicKey)
      })
      .then((account) => {
        if (!this.hasAssetTrustline(account, destAsset)) {
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
        return this.server().submitTransaction(signedTransaction)
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
        return this.server().submitTransaction(signedTransaction)
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
        return this.server().submitTransaction(signedTransaction)
      })
  }
}
