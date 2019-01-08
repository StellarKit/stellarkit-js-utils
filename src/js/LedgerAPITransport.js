import StellarTransport from '@ledgerhq/hw-transport-u2f'

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
      return this.nodeTransport.create()
    }

    return StellarTransport.create()
  }
}
