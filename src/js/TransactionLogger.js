import * as EventEmitter from 'events'

// monitor transactions by...
// TranactionLogger.on('transaction', callback)
class TransactionLogger extends EventEmitter {
  log(result, label) {
    this.emit('transaction', result, label)
  }
}

const instance = new TransactionLogger()

export default instance