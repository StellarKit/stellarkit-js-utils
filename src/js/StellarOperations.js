const StellarSdk = require('stellar-sdk')
import Utils from './utils.js'

export default class StellarOperations {
  static paymentOperation(destKey, amount, asset, sourcePublicKey) {
    const opts = {
      destination: destKey,
      asset: asset,
      amount: amount,
      source: sourcePublicKey
    }

    return StellarSdk.Operation.payment(opts)
  }

  static manageOfferOperation(buying, selling, amount, price, offerID = 0, sourcePublicKey = null) {
    const opts = {
      selling: selling,
      buying: buying,
      amount: amount,
      price: price,
      offerId: offerID,
      source: sourcePublicKey
    }
    return StellarSdk.Operation.manageOffer(opts)
  }

  static setOptionsOperation(options, sourcePublicKey = null) {
    const opts = options

    // just need to add the source public key to passed in options
    opts.source = sourcePublicKey

    return StellarSdk.Operation.setOptions(opts)
  }

  static manageDataOperation(name, value, sourcePublicKey = null) {
    const opts = {
      name: name,
      value: Utils.strOK(value) ? value : null, // pass null to remove name/value
      source: sourcePublicKey
    }

    return StellarSdk.Operation.manageData(opts)
  }

  static changeTrustOperation(asset, limit, sourcePublicKey = null) {
    const opts = {
      asset: asset,
      limit: limit,
      source: sourcePublicKey
    }

    return StellarSdk.Operation.changeTrust(opts)
  }

  static pathPaymentOperation(destination, sendAsset, sendMax, destAsset, destAmount, sourcePublicKey = null) {
    const opts = {
      destination: destination,
      sendAsset: sendAsset,
      sendMax: sendMax,
      destAsset: destAsset,
      destAmount: destAmount,
      path: [],
      source: sourcePublicKey
    }

    return StellarSdk.Operation.pathPayment(opts)
  }

  static multisigOperations(secondPublicKey, secondPublicKeyWeight = 1, medThreshold = 2, highThreshold = 2, sourcePublicKey = null) {
    const operations = []

    let opts = {
      source: sourcePublicKey,
      signer: {
        ed25519PublicKey: secondPublicKey,
        weight: secondPublicKeyWeight
      }
    }
    operations.push(StellarSdk.Operation.setOptions(opts))

    opts = {
      source: sourcePublicKey,
      medThreshold: medThreshold,
      highThreshold: highThreshold
    }
    operations.push(StellarSdk.Operation.setOptions(opts))

    return operations
  }

  static removeMultisigOperations(secondPublicKey, medThreshold = 1, highThreshold = 1, sourcePublicKey = null) {
    const operations = []

    let opts = {
      source: sourcePublicKey,
      medThreshold: medThreshold,
      highThreshold: highThreshold
    }
    operations.push(StellarSdk.Operation.setOptions(opts))

    opts = {
      source: sourcePublicKey,
      signer: {
        ed25519PublicKey: secondPublicKey,
        weight: 0
      }
    }
    operations.push(StellarSdk.Operation.setOptions(opts))

    return operations
  }
}