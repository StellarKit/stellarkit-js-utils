const StellarSdk = require('stellar-sdk')

export default class HorizonServer {
  constructor(serverURL, testnet = true, serverOptions) {
    this._serverURL = serverURL
    this._testnet = testnet

    if (this._testnet) {
      StellarSdk.Network.useTestNetwork()
    } else {
      StellarSdk.Network.usePublicNetwork()
    }

    this._server = new StellarSdk.Server(serverURL, serverOptions)
  }

  server() {
    // this is global, so I set it everytime to be safe
    if (this._testnet) {
      StellarSdk.Network.useTestNetwork()
    } else {
      StellarSdk.Network.usePublicNetwork()
    }

    return this._server
  }

  isTestnet() {
    return this._testnet
  }

  serverURL() {
    return this._serverURL
  }
}
