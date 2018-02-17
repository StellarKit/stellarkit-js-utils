const StellarSdk = require('stellar-sdk')
const StellarApp = require('@ledgerhq/hw-app-str').default
const bip32Path = "44'/148'/0'"
import LedgerAPITransport from './LedgerAPITransport.js'

export default class LedgerAPI {
  constructor() {
    this.transport = null
    this.str = null
  }

  doConnect() {
    return LedgerAPITransport.create()
      .then((t) => {
        this.transport = t
        this.str = new StellarApp(this.transport)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
      })
  }

  connect() {
    if (this.str) {
      return this.str.getAppConfiguration()
        .catch(() => {
          this.transport.close()

          this.str = null
          this.transport = null

          return this.doConnect()
        })
    } else {
      return this.doConnect()
    }
  }

  connectLedger(callback) {
    const doConnect = () => {
      this.connect()
        .then(() => {
          callback()
        })
        .catch((error) => {
          console.log('Error in connectLedger: ' + JSON.stringify(error))

          // could fail if in browser mode on node or vis versa
          // try again in one second
          setTimeout(() => {
            console.log('trying again to connect')

            doConnect()
          }, 1000)
        })
    }

    doConnect()
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
      })
  }
}
