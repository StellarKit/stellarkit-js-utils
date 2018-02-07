const StellarSdk = require('stellar-sdk')

export default class TransactionSigner {
  // 'constructor' with secret
  static signerWithSecret(secret) {
    const result = new TransactionSigner()
    result.secret = secret

    return result
  }

  // 'constructor' with ledgerAPI
  static signerWithLedgerAPI(ledgerAPI) {
    const result = new TransactionSigner()
    result.ledgerAPI = ledgerAPI

    return result
  }

  // if true, alert the user to confirm on device
  usingLedger() {
    return this.ledgerAPI !== null
  }

  signTransaction(sourceKey, transaction) {
    return new Promise((resolve, reject) => {
      if (this.ledgerAPI) {
        this.ledgerAPI.signTransaction(sourceKey, transaction)
          .then((signedTx) => {
            resolve(signedTx)
          })
          .catch((error) => {
            reject(error)
          })
      } else {
        const sourceKeys = StellarSdk.Keypair.fromSecret(this.secret)

        transaction.sign(sourceKeys)
        resolve(transaction)
      }
    })
  }
}
