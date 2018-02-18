const StellarTransport = require('@ledgerhq/hw-transport-u2f').default

export default class LedgerAPITransport {
  static setupForNode(transport) {
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
      return this.nodeTransport.create(180000, 180000)
    }

    return StellarTransport.create(180000, 180000)
  }
}
