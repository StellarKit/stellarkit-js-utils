<template>
<div class='payment-view'>
  <div class='input-title'>
    <v-icon dark large class='back-button' @click="dialogMode = 'start'" v-if="dialogMode !== 'start'">chevron_left</v-icon>
    {{headerMessage}}
  </div>

  <div class='payment-content'>
    <div v-if="dialogMode === 'start'" class='payment-start'>
      <div class='title-start'>Choose Method</div>
      <div>
        <v-btn @click="buttonClick('useNano')">Use Ledger Nano</v-btn>
      </div>
      <div>
        <v-btn @click="buttonClick('useKey')">Use secret key</v-btn>
      </div>

      <div v-if='donate' class='own-wallet'>
        Or use your favorite wallet:<br>To: <span class='xlm-address'>{{destinationPublicKey}}</span>
      </div>
    </div>

    <div v-else-if="dialogMode === 'useNano'" class='payment-nano'>
      <v-text-field label="Lumens" type='number' v-model.trim="xlm" @keyup.enter="buttonClick('sendWithNano')" autofocus></v-text-field>

      <div v-if='!donate' class='own-wallet'>
        <v-text-field label="Destination" v-model.trim="destinationPublicKey" @keyup.enter="buttonClick('sendWithNano')"></v-text-field>
      </div>

      <div class='sign-button-area'>
        <v-btn @click="buttonClick('sendWithNano')" :disabled="!connected">Send with Ledger Nano</v-btn>
        <div v-if="!connected">{{browserSupportMessage}}</div>
        <div>{{status}}</div>
      </div>
    </div>
    <div v-else-if="dialogMode === 'useKey'" class='payment-secret'>
      <div class='sign-button-area'>
        <v-text-field label="Amount" type='number' v-model.trim="xlm" autofocus></v-text-field>

        <div v-if='!donate' class='own-wallet'>
          <v-text-field label="Destination" v-model.trim="destinationPublicKey" @keyup.enter="buttonClick('sendWithSecret')"></v-text-field>
        </div>

        <v-text-field label="Secret Key" v-model.trim="secretKey" @keyup.enter="buttonClick('sendWithSecret')" hint="Starts with an 'S'" :append-icon="showSecret ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (showSecret = !showSecret)" :type="showSecret ? 'text' : 'password'"></v-text-field>

        <v-btn @click="buttonClick('sendWithSecret')" :disabled="disableSendLumens">Send Lumens</v-btn>
        <div>{{status}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Utils from '../js/utils.js'
import LedgerAPI from '../js/LedgerAPI.js'
const StellarSdk = require('stellar-sdk')

export default {
  props: ['nodeEnv', 'donationPublicKey'],
  data() {
    return {
      visible: false,
      destinationPublicKey: '',
      donate: false,
      dialogMode: 'start',
      status: '',
      secretKey: '',
      connected: true,
      xlm: 10,
      showSecret: false,
      browserSupportMessage: '',
      server: null,
      ledgerAPI: null
    }
  },
  computed: {
    disableSendLumens: function () {
      return Utils.strlen(this.secretKey) < 10 || this.xlm < 1
    },
    headerMessage: function () {
      if (this.donate) {
        return 'Your XLM donation is appreciated.'
      }
      return 'Make a payment.'
    }
  },
  created() {
    if (Utils.strlen(this.donationPublicKey) !== 0) {
      this.donate = true
      this.destinationPublicKey = this.donationPublicKey
    }

    if (this.nodeEnv) {
      this.browserSupportMessage = 'Make sure "Browser Support" is disabled'
    } else {
      this.browserSupportMessage = 'Make sure "Browser Support" is enabled'
    }

    this.ledgerAPI = new LedgerAPI(!this.nodeEnv)

    StellarSdk.Network.usePublicNetwork()
    this.server = new StellarSdk.Server('https://horizon.stellar.org')
  },
  methods: {
    buttonClick(id) {
      switch (id) {
        case 'useNano':
          this.dialogMode = 'useNano'
          this.status = ''

          this.connectLedger()
          break
        case 'useKey':
          this.dialogMode = 'useKey'
          this.status = ''
          break
        case 'sendWithNano':
          this.sendWithNano()
          break
        case 'sendWithSecret':
          this.sendWithSecret()
          break
        default:
          console.log('not handled: ' + id)
          break
      }
    },
    connectLedger() {
      this.connected = false

      this.ledgerAPI.connectLedger(() => {
        this.connected = true
      }, !this.nodeEnv)
    },
    loadAccount(signWithNano) {
      return new Promise((resolve, reject) => {
        this.server.loadAccount(this.destinationPublicKey)
          .catch((error) => {
            this.status = 'Failed to load destination account: ' + error
            reject(error)
          })
          .then((destAccount) => {
            if (signWithNano) {
              console.log('get public kcy')

              this.ledgerAPI.getPublicKey()
                .catch((error) => {
                  this.status = 'Failed to get source public key: ' + error
                  reject(error)
                })
                .then((sourcePublicKey) => {
                  console.log('ggggggggg')

                  this.server.loadAccount(sourcePublicKey)
                    .then((sourceAccount) => {
                      console.log('ggggggggddddddddddd')

                      resolve(sourceAccount)
                    })
                    .catch((error) => {
                      this.status = 'Failed to load source account: ' + error
                      reject(error)
                    })
                })
            } else {
              const keyPair = StellarSdk.Keypair.fromSecret(this.secretKey)

              this.server.loadAccount(keyPair.publicKey())
                .then((sourceAccount) => {
                  resolve(sourceAccount)
                })
                .catch((error) => {
                  this.status = 'Failed to load source account: ' + error
                  reject(error)
                })
            }
          })
      })
    },
    sendWithNano() {
      this.sendPayment(true)
    },
    sendWithSecret() {
      this.sendPayment(false)
    },
    sendPayment(signWithNano) {
      if (this.xlm < 1) {
        this.status = 'Lumens must be greater than 0'
        return
      }
      if (!signWithNano && Utils.strlen(this.secretKey) < 1) {
        this.status = 'Please enter your secret key'
        return
      }

      console.log('sendPayment')
      this.loadAccount(signWithNano)
        .catch((error) => {
          this.status = 'Error loading account: ' + error
        })
        .then((sourceAccount) => {
          console.log('loaded')

          const builder = new StellarSdk.TransactionBuilder(sourceAccount)
            .addOperation(StellarSdk.Operation.payment({
              destination: this.destinationPublicKey,
              asset: StellarSdk.Asset.native(),
              amount: String(this.xlm)
            }))

          const transaction = builder.build()

          this.signTransaction(sourceAccount.accountId(), transaction, signWithNano)
            .then((signedTransaction) => {
              this.status = 'Submitting transaction...'

              return this.server.submitTransaction(signedTransaction)
            })
            .then((response) => {
              this.status = 'Payment Successful! Thank you!'

              // clear secret key
              this.secretKey = ''
            })
            .catch((error) => {
              this.status = 'Error signing transaction: ' + error
            })
        })
    },
    signTransaction(sourceKey, transaction, signWithNano) {
      return new Promise((resolve, reject) => {
        if (signWithNano) {
          this.status = 'Confirm transaction on Nano...'

          this.ledgerAPI.signTransaction(sourceKey, transaction)
            .then((signedTx) => {
              resolve(signedTx)
            })
            .catch((error) => {
              reject(error)
            })
        } else {
          const sourceKeys = StellarSdk.Keypair.fromSecret(this.secretKey)

          transaction.sign(sourceKeys)
          resolve(transaction)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-view {
    display: flex;
    flex-direction: column;
    padding: 20px;

    .input-title {
        position: relative;
        background: steelblue;
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 1.2em;

        .back-button {
            position: absolute;
            top: 5px;
            left: 0;
        }
    }

    .payment-content {
        margin-top: 20px;

        .own-wallet {
            margin-top: 20px;
            text-align: center;

            .xlm-address {
                font-size: 0.9em;
                font-weight: bold;
            }
        }

        .payment-start {
            .title-start {
                font-size: 1.2em;
                margin-bottom: 8px;
            }

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .payment-nano {
            .sign-button-area {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        .payment-secret {
            .sign-button-area {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
}
</style>
