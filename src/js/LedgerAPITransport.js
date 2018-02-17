const StellarTransport = require('@ledgerhq/hw-transport-u2f').default

export default class LedgerAPITransport {
  static setupForNode(transport) {
    console.log('setting node transport: ' + JSON.stringify(transport))
    this.nodeTransport = transport
  }

  static isNodeTransport(transport) {
    if (this.nodeTransport) {
      return true
    }
    return false
  }

  static create() {
    if (this.nodeTransport) {
      const transport = this.nodeTransport.create(180000, 180000)
      console.log('setting node transport: ' + JSON.stringify(transport))

      return transport
    }

    return StellarTransport.create(180000, 180000)
  }
}
