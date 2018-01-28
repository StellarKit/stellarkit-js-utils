const StellarSdk = require('stellar-sdk')
const $ = require('jquery')

export default class StellarAPI {
  constructor(serverAPIServer) {
    if (!serverAPIServer) {
      console.log('StellarAPI constructor missing parameter')
    }

    this._serverAPIServer = serverAPIServer
  }

  server() {
    return this._serverAPIServer.server()
  }

  serverURL() {
    return this._serverAPIServer.serverURL()
  }

  horizonMetrics() {
    const url = this.serverURL() + '/metrics'

    const promise = new Promise((resolve, reject) => {
      $.get(url, (response) => {
        resolve(response)
      }, 'json').fail((error) => {
        reject(error)
      })
    })
    return promise
  }

  accountInfo(publicKey) {
    const promise = new Promise((resolve, reject) => {
      this.server().loadAccount(publicKey)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise
  }

  balances(publicKey) {
    const promise = new Promise((resolve, reject) => {
      this.server().loadAccount(publicKey)
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
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
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  mergeAccount(sourceSecret, destKey) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(StellarSdk.Operation.accountMerge({
              destination: destKey
            }))
            .build()

          transaction.sign(sourceKeys)
          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  manageOffer(sourceSecret, buying, selling, amount, price, offerID = 0) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(StellarSdk.Operation.manageOffer({
              selling: selling,
              buying: buying,
              amount: amount,
              price: price,
              offerId: offerID
            }))
            .build()

          transaction.sign(sourceKeys)
          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  setTrustForAsset(sourceSecret, asset, amount) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(StellarSdk.Operation.changeTrust({
              asset: asset,
              limit: amount
            }))
            .build()

          transaction.sign(sourceKeys)

          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  setDomain(sourceSecret, domain) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .then((issuer) => {
          const transaction = new StellarSdk.TransactionBuilder(issuer)
            .addOperation(StellarSdk.Operation.setOptions({
              homeDomain: domain
            }))
            .build()

          transaction.sign(sourceKeys)
          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  makeMultiSig(sourceSecret, publicKey) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(StellarSdk.Operation.setOptions({
              signer: {
                ed25519PublicKey: publicKey,
                weight: 1
              }
            }))
            .addOperation(StellarSdk.Operation.setOptions({
              masterWeight: 1, // set master key weight
              lowThreshold: 1,
              medThreshold: 2, // a payment is medium threshold
              highThreshold: 2 // make sure to have enough weight to add up to the high threshold!
            }))
            .build()

          transaction.sign(sourceKeys)

          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  sendAsset(sourceSecret, destKey, amount, asset = null, memo = null, additionalSigners = null) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(destKey)
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
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
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  hasAssetTrustline(account, asset) {
    let trusted = false
    trusted = account.balances.some((balance) => {
      return balance.asset_code === asset.getCode() &&
        balance.asset_issuer === asset.getIssuer()
    })

    return trusted
  }

  buyTokens(sourceSecret, sendAsset, destAsset, sendMax, destAmount) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          if (this.hasAssetTrustline(account, destAsset)) {
            const transaction = new StellarSdk.TransactionBuilder(account).addOperation(
                StellarSdk.Operation.pathPayment({
                  destination: sourceKeys.publicKey(),
                  sendAsset: sendAsset,
                  sendMax: sendMax,
                  destAsset: destAsset,
                  destAmount: destAmount,
                  path: []
                })
              )
              .build()

            transaction.sign(sourceKeys)

            return this.server().submitTransaction(transaction)
          } else {
            reject('No trustline from buyer to asset')
          }
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  lockAccount(sourceSecret) {
    const promise = new Promise((resolve, reject) => {
      const options = {
        masterWeight: 0, // set master key weight to zero
        lowThreshold: 1,
        medThreshold: 1,
        highThreshold: 1
      }

      this.setOptions(sourceSecret, options)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  setOptions(sourceSecret, options) {
    const promise = new Promise((resolve, reject) => {
      const sourceKeys = StellarSdk.Keypair.fromSecret(sourceSecret)

      this.server().loadAccount(sourceKeys.publicKey())
        .catch(StellarSdk.NotFoundError, (error) => {
          reject(error)
        })
        .then((account) => {
          const transaction = new StellarSdk.TransactionBuilder(account)
            .addOperation(StellarSdk.Operation.setOptions(options))
            .build()

          transaction.sign(sourceKeys)

          return this.server().submitTransaction(transaction)
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })

    return promise
  }

  buggy() {
    const asset = new StellarSdk.Asset('LMB', 'GCYQSB3UQDSISB5LKAL2OEVLAYJNIR7LFVYDNKRMLWQKDCBX4PU3Z6JP')
    try {
      console.log(JSON.stringify(asset))
      const xdr = asset.toXDRObject()
      console.log(JSON.stringify(xdr))
      const newAsset = StellarSdk.Asset.fromOperation(xdr)
      console.log(JSON.stringify(newAsset))
    } catch (error) {
      console.log(error)
    }
  }
}
