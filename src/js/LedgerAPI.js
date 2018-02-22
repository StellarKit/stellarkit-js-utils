const StellarSdk = require('stellar-sdk')
const StellarApp = require('@ledgerhq/hw-app-str').default
const bip32Path = "44'/148'/0'"
import LedgerAPITransport from './LedgerAPITransport.js'

export default class LedgerAPI {
  constructor() {
    this.transport = null
    this.str = null
  }

  createTransport() {
    // already exists, just return
    if (this.str) {
      return Promise.resolve()
    }

    return LedgerAPITransport.create()
      .then((t) => {
        this.transport = t
        this.str = new StellarApp(this.transport)

        return null
      })
      .catch((error) => {
        console.log(JSON.stringify(error))

        throw error
      })
  }

  verifyConnect() {
    return this.str.getAppConfiguration()
      .then(() => {
        return null
      })
      .catch(() => {
        this.transport.close()

        this.str = null
        this.transport = null

        throw new Error('connection to ledger failed')
      })
  }

  connect() {
    return this.createTransport()
      .then(() => {
        return this.verifyConnect()
          .catch((result) => {
            // trying one more time before failure
            // transport could have already existed, but went bad, create and verify again
            return this.createTransport()
              .then(() => {
                return this.verifyConnect()
              })
          })
      })
      .catch((error) => {
        console.log('Error: connect: ' + JSON.stringify(error))

        throw new Error('connection failed')
      })
  }

  getPublicKey() {
    return this.connect()
      .then(() => {
        return this.str.getPublicKey(bip32Path)
      })
      .then((result) => {
        return result.publicKey
      })
      .catch((error) => {
        console.log('Error: getPublicKey: ' + JSON.stringify(error))

        throw error
      })
  }

  signTransaction(publicKey, transaction) {
    return this.connect()
      .then(() => {
        return this.str.signTransaction(bip32Path, transaction.signatureBase())
      })
      .then((result) => {
        const signature = result['signature']
        const keyPair = StellarSdk.Keypair.fromPublicKey(publicKey)

        // verify broken for Electron (window !== null)
        if (keyPair.verify(transaction.hash(), signature)) {
          const hint = keyPair.signatureHint()
          const decorated = new StellarSdk.xdr.DecoratedSignature({
            hint: hint,
            signature: signature
          })
          transaction.signatures.push(decorated)

          return transaction
        }

        console.log('Failure: Bad signature')
        throw new Error('Verify signature failed')
      })
      .catch((error) => {
        console.log('Error: signTransaction: ' + JSON.stringify(error))

        throw error
      })
  }
}
