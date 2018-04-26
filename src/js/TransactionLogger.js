const EventEmitter = require('events')

// monitor transactions by...
// TranactionLogger.on('transaction', callback)
class TransactionLogger extends EventEmitter {
  log(transaction, label = '') {
    const xdr = transaction.toEnvelope().toXDR('base64')

    this.emit('transaction', xdr, label)
  }
}

const instance = new TransactionLogger()
Object.freeze(instance)

export default instance