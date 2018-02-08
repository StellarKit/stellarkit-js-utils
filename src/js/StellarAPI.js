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

  mergeAccount(sourceSecret, destKey) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.accountMerge({
            destination: destKey
          })).build()

        transaction.sign(sourceKeys)
        return this.server().submitTransaction(transaction)
      })
  }

  manageOffer(sourceSecret, buying, selling, amount, price, offerID = 0) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.manageOffer({
            selling: selling,
            buying: buying,
            amount: amount,
            price: price,
            offerId: offerID
          })).build()

        transaction.sign(sourceKeys)
        return this.server().submitTransaction(transaction)
      })
  }

  changeTrust(sourceSecret, asset, limit) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.changeTrust({
            asset: asset,
            limit: limit
          })).build()

        transaction.sign(sourceKeys)

        return this.server().submitTransaction(transaction)
      })
  }

  allowTrust(sourceSecret, trustor, asset, authorize) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.allowTrust({
            trustor: trustor,
            assetCode: asset.getCode(),
            authorize: authorize
          }))
          .build()

        transaction.sign(sourceKeys)

        return this.server().submitTransaction(transaction)
      })
  }

  makeMultiSig(sourceSecret, secondPublicKey) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.setOptions({
            signer: {
              ed25519PublicKey: secondPublicKey,
              weight: 1
            }
          }))
          .addOperation(StellarSdk.Operation.setOptions({
            medThreshold: 2,
            highThreshold: 2
          }))
          .build()

        transaction.sign(sourceKeys)

        return this.server().submitTransaction(transaction)
      })
  }

  removeMultiSig(sourceSecret, secondSecret, secondPublicKey, transactionOpts) {
    return this.removeMultiSigTransaction(sourceSecret, secondSecret, secondPublicKey, transactionOpts)
      .then((transaction) => {
        return this.server().submitTransaction(transaction)
      })
  }

  submitTransaction(transaction) {
    return this.server().submitTransaction(transaction)
  }

  removeMultiSigTransaction(sourceSecret, secondSecret, secondPublicKey, transactionOpts) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)
    const secondKeys = StellarSdk.Keypair.fromSecret(secondSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
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

        transaction.sign(sourceKeys)
        transaction.sign(secondKeys)

        return transaction
      })
  }

  sendAsset(sourceSecret, destKey, amount, asset = null, memo = null, additionalSigners = null) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(destKey)
      .then(() => {
        return this.server().loadAccount(sourceKeys.publicKey())
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

        transaction.sign(sourceKeys)

        if (additionalSigners) {
          for (const signerKey of additionalSigners) {
            transaction.sign(StellarSdk.Keypair.fromSecret(signerKey))
          }
        }

        return this.server().submitTransaction(transaction)
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

  paths(sourcePublic, destinationPublic, destinationAsset, destinationAmount) {
    return this.server().paths(sourcePublic, destinationPublic, destinationAsset, destinationAmount)
  }

  buyTokens(sourceSecret, sendAsset, destAsset, sendMax, destAmount) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        if (this.hasAssetTrustline(account, destAsset)) {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(
              StellarSdk.Operation.pathPayment({
                destination: sourceKeys.publicKey(),
                sendAsset: sendAsset,
                sendMax: sendMax,
                destAsset: destAsset,
                destAmount: destAmount,
                path: []
              })).build()

          transaction.sign(sourceKeys)

          return this.server().submitTransaction(transaction)
        } else {
          throw new Error('No trustline from buyer to asset')
        }
      })
  }

  lockAccount(sourceSecret) {
    const options = {
      masterWeight: 0, // set master key weight to zero
      lowThreshold: 1,
      medThreshold: 1,
      highThreshold: 1
    }

    return this.setOptions(sourceSecret, options)
  }

  setDomain(sourceSecret, domain) {
    const options = {
      homeDomain: domain
    }

    return this.setOptions(sourceSecret, options)
  }

  getFlags(publicKey) {
    return this.server().loadAccount(publicKey)
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

  setFlags(sourceSecret, flags) {
    const options = {
      setFlags: flags
    }

    return this.setOptions(sourceSecret, options)
  }

  clearFlags(sourceSecret, flags) {
    const options = {
      clearFlags: flags
    }

    return this.setOptions(sourceSecret, options)
  }

  setInflationDestination(sourceSecret, inflationDest) {
    const options = {
      inflationDest: inflationDest
    }

    return this.setOptions(sourceSecret, options)
  }

  createAccount(sourceSecret, destinationKey, startingBalance) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    const options = {
      destination: destinationKey,
      startingBalance: startingBalance
    }

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.createAccount(options))
          .build()

        transaction.sign(sourceKeys)

        return this.server().submitTransaction(transaction)
      })
      .then((response) => {
        return this.server().loadAccount(destinationKey)
          .then((account) => {
            return account
          })
      })
  }

  setOptions(sourceSecret, options) {
    const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

    return this.server().loadAccount(sourceKeys.publicKey())
      .then((account) => {
        const transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.setOptions(options))
          .build()

        transaction.sign(sourceKeys)

        return this.server().submitTransaction(transaction)
      })
  }
}
