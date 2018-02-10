const StellarSdk = require('stellar-sdk')

export default class StellarWallet {
  // 'constructor' with secret
  static secret(secret) {
    const result = new StellarWallet()

    result._secret = secret
    result._publicKey = StellarSdk.Keypair.fromSecret(secret).publicKey()

    return result
  }

  // 'constructor' with ledgerAPI
  static ledger(ledgerAPI, confirmCallback) {
    const result = new StellarWallet()
    result.ledgerAPI = ledgerAPI

    // alert user to confirm transaction on device
    result.confirmCallback = confirmCallback

    return result
  }

  // using promise so ledger and user entered have same API
  publicKey() {
    return new Promise((resolve, reject) => {
      if (this._publicKey) {
        resolve(this._publicKey)
      }

      if (!this.usingLedger()) {
        throw new Error('StellarWallet publicKey failed.  Should never get here.')
      }

      this.ledgerAPI.getPublicKey()
        .then((publicKey) => {
          this._publicKey = publicKey
          resolve(publicKey)
        })
    })
  }

  // if true, alert the user to confirm on device
  usingLedger() {
    return this.ledgerAPI !== undefined
  }

  signTransaction(transaction) {
    return this.publicKey()
      .then((publicKey) => {
        if (this.usingLedger()) {
          // tell the caller to display confirm transaction message to user
          if (this.confirmCallback) {
            this.confirmCallback()
          }

          return this.ledgerAPI.signTransaction(publicKey, transaction)
        }
        const sourceKeys = StellarSdk.Keypair.fromSecret(this._secret)

        transaction.sign(sourceKeys)

        return transaction
      })
      .then((signedTx) => {
        console.log('got trans ' + JSON.stringify(signedTx))

        return signedTx
      })
  }
}
