const StellarSdk = require('stellar-sdk')
const StellarTransport = require('@ledgerhq/hw-transport-u2f').default
const StellarTransportNode = require('@ledgerhq/hw-transport-node-hid').default
const StellarApp = require('@ledgerhq/hw-app-str').default
const bip32Path = "44'/148'/0'"

// we can only have one transport, otherwise it fails
class SharedTransport {
  static set(transport) {
    console.log('setting transport')
    this.transport = transport

    this.transport.on('disconnect', () => {
      console.log('disconnected')
      this.transport = null
    })
  }

  static get() {
    return this.transport
  }
}

export default class LedgerAPI {
  constructor(browser = true) {
    this.browser = browser
  }

  getTransport() {
    return new Promise((resolve, reject) => {
      if (SharedTransport.get()) {
        console.log('reusing transport')
        resolve(SharedTransport.get())
      } else {
        const openTimeout = 180000 // 3 minutes
        const listenTimeout = 180000

        if (!this.browser) {
          return StellarTransportNode.create(openTimeout, listenTimeout)
            .then((transport) => {
              SharedTransport.set(transport)
              resolve(SharedTransport.get())
            })
        }

        return StellarTransport.create(openTimeout, listenTimeout)
          .then((transport) => {
            SharedTransport.set(transport)
            resolve(SharedTransport.get())
          })
      }
    })
  }

  connectLedger(callback) {
    const doConnect = () => {
      this.getTransport()
        .then((transport) => {
          const stellarApp = new StellarApp(transport)
          return stellarApp.getAppConfiguration()
        })
        .then((result) => {
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
    return this.getTransport()
      .then((transport) => {
        const stellarApp = new StellarApp(transport)
        return stellarApp.getPublicKey(bip32Path)
      })
      .then((result) => {
        return result['publicKey']
      })
  }

  signTransaction(sourceKey, transaction) {
    return this.getTransport()
      .then((transport) => {
        const stellarApp = new StellarApp(transport)

        return stellarApp.signTransaction(bip32Path, transaction.signatureBase())
      })
      .then((result) => {
        const signature = result['signature']
        const keyPair = StellarSdk.Keypair.fromPublicKey(sourceKey)

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
  }
}
