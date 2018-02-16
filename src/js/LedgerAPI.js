const StellarSdk = require('stellar-sdk')
const StellarTransport = require('@ledgerhq/hw-transport-u2f').default
const StellarTransportNode = require('@ledgerhq/hw-transport-node-hid').default
const StellarApp = require('@ledgerhq/hw-app-str').default
const bip32Path = "44'/148'/0'"

export default class LedgerAPI {
  constructor(browser = true) {
    this.browser = browser
  }

  createTransport() {
    const openTimeout = 10000
    const listenTimeout = 10000

    if (!this.browser) {
      return StellarTransportNode.create(openTimeout, listenTimeout)
    }

    return StellarTransport.create(openTimeout, listenTimeout)
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
        const signature = result['signature']
        const keyPair = StellarSdk.Keypair.fromPublicKey(sourceKey)

        // verify broken for Electron (window !== null)
        if (!this.browser || keyPair.verify(transaction.hash(), signature)) {
          const hint = keyPair.signatureHint()
          const decorated = new StellarSdk.xdr.DecoratedSignature({
            hint: hint,
            signature: signature
          })

          transaction.signatures.push(decorated)
        } else {
          console.error('Failure: Bad signature')
        }

        return transaction
      })
  }
}
