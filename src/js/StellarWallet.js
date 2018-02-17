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
    result._ledgerAPI = ledgerAPI

    // alert user to confirm transaction on device
    result._confirmCallback = confirmCallback

    return result
  }

  // using promise so ledger and user entered have same API
  publicKey() {
    return new Promise((resolve, reject) => {
      if (this._publicKey) {
        resolve(this._publicKey)
      }

      if (!this.usingLedger()) {
        reject(new Error('StellarWallet publicKey failed.  Should never get here.'))
      }

      this._ledgerAPI.getPublicKey()
        .then((publicKey) => {
          this._publicKey = publicKey

          resolve(publicKey)
        })
    })
  }

  // if true, alert the user to confirm on device
  usingLedger() {
    return this._ledgerAPI !== undefined
  }

  signTransaction(transaction) {
    return this.publicKey()
      .then((publicKey) => {
        if (this.usingLedger()) {
          // tell the caller to display confirm transaction message to user
          if (this._confirmCallback) {
            this._confirmCallback()
          }

          return this._ledgerAPI.signTransaction(publicKey, transaction)
        }
        const sourceKeys = StellarSdk.Keypair.fromSecret(this._secret)

        transaction.sign(sourceKeys)

        return transaction
      })
      .then((signedTx) => {
        return signedTx
      })
  }
}
