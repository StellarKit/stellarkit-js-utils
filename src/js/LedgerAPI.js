const StellarSdk = require('stellar-sdk')
const StellarLedger = require('stellar-ledger-api')
const bip32Path = "44'/148'/0'"

export default class LedgerAPI {
  constructor(callback, browser = true) {
    this.callback = callback
    this.browser = browser
  }

  createComm(timeout = 0) {
    if (!this.browser) {
      return StellarLedger.comm_node.create_async(timeout)
    }

    return StellarLedger.comm.create_async(timeout)
  }

  connectLedger() {
    if (!this.browser) {
      this.connectLedgerNode()
    } else {
      this.connectLedgerBrowser()
    }
  }

  connectLedgerNode() {
    // for node we have to do our own loop to connect
    const doConnect = () => {
      this.createComm()
        .then((comm) => {
          new StellarLedger.Api(comm).connect(() => {
            this.notifiyConnected()
          }, (error) => {
            console.log('Error: ' + JSON.stringify(error))

            // keep trying
            setTimeout(doConnect, 1000)
          })
        })
    }
    doConnect()
  }

  connectLedgerBrowser() {
    this.createComm(Number.MAX_VALUE)
      .then((comm) => {
        new StellarLedger.Api(comm).connect(() => {
          this.notifiyConnected()
        }, (error) => {
          console.log('Error: ' + JSON.stringify(error))
        })
      })
  }

  getPublicKey() {
    return this.createComm()
      .then((comm) => {
        new StellarLedger.Api(comm).getPublicKey_async(bip32Path)
          .then((result) => {
            return result['publicKey']
          })
      })
  }

  signTransaction(sourceKey, transaction) {
    return this.createComm()
      .then((comm) => {
        new StellarLedger.Api(comm).signTx_async(bip32Path, transaction)
          .then((result) => {
            const signature = result['signature']

            const keyPair = StellarSdk.Keypair.fromPublicKey(sourceKey)
            const hint = keyPair.signatureHint()
            const decorated = new StellarSdk.xdr.DecoratedSignature({
              hint: hint,
              signature: signature
            })

            transaction.signatures.push(decorated)

            return transaction
          })
      })
  }

  notifiyConnected() {
    this.callback()
  }
}
