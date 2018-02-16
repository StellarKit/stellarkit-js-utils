const StellarSdk = require('stellar-sdk')
const StellarTransport = require('@ledgerhq/hw-transport-u2f').default
const StellarTransportNode = require('@ledgerhq/hw-transport-node-hid').default
const StellarApp = require('@ledgerhq/hw-app-str').default
const bip32Path = "44'/148'/0'"

export default class LedgerAPI {
  constructor(browser = true) {
    this.browser = browser

    this.transport = null
  }

  createTransport() {
    return new Promise((resolve, reject) => {
      if (this.transport) {
        resolve(this.transport)
      } else {
        const openTimeout = 100000
        const listenTimeout = 100000

        if (!this.browser) {
          return StellarTransportNode.create(openTimeout, listenTimeout)
            .then((transport) => {
              this.transport = transport
              resolve(this.transport)
            })
        }

        return StellarTransport.create(openTimeout, listenTimeout)
          .then((transport) => {
            this.transport = transport
            resolve(this.transport)
          })
      }
    })
  }

  connectLedger(callback) {
    this.createTransport()
      .then((transport) => {
        transport.on('disconnect', () => {
          console.log('disconnected')
        })

        const stellarApp = new StellarApp(transport)
        return stellarApp.getAppConfiguration()
      })
      .then((result) => {
        callback()
      })
      .catch((error) => {
        console.log('Error in connectLedger: ' + JSON.stringify(error))
      })
  }

  getPublicKey() {
    return this.createTransport()
      .then((transport) => {
        const stellarApp = new StellarApp(transport)
        return stellarApp.getPublicKey(bip32Path)
      })
      .then((result) => {
        return result['publicKey']
      })
  }

  signTransaction(sourceKey, transaction) {
    return this.createTransport()
      .then((transport) => {
        const stellarApp = new StellarApp(transport)

        return stellarApp.signTransaction(bip32Path, transaction.signatureBase())
      })
      .then((result) => {
        console.log('signed')
        const signature = result['signature']
        const keyPair = StellarSdk.Keypair.fromPublicKey(sourceKey)

        // verify broken for Electron (window !== null)
        // if (keyPair.verify(transaction.hash(), signature)) {
        //   console.log('OK sig')
        // } else {
        //   console.log('Failure: Bad signature')
        // }

        const hint = keyPair.signatureHint()
        const decorated = new StellarSdk.xdr.DecoratedSignature({
          hint: hint,
          signature: signature
        })

        transaction.signatures.push(decorated)

        return transaction
      })
  }
}
