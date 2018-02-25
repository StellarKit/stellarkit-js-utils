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
        <v-btn @click="buttonClick('sendWithNano')" :disabled='sendingPayment'>Send with Ledger Nano</v-btn>
        <div>{{status}}</div>
      </div>
    </div>
    <div v-else-if="dialogMode === 'useKey'" class='payment-secret'>
      <v-text-field label="Amount" type='number' v-model.trim="xlm" autofocus></v-text-field>

      <div v-if='!donate' class='own-wallet'>
        <v-text-field label="Destination" v-model.trim="destinationPublicKey" @keyup.enter="buttonClick('sendWithSecret')"></v-text-field>
      </div>

      <v-text-field label="Secret Key" v-model.trim="secretKey" @keyup.enter="buttonClick('sendWithSecret')" hint="Starts with an 'S'" :append-icon="showSecret ? 'visibility_off' : 'visibility'" :append-icon-cb="() => (showSecret = !showSecret)" :type="showSecret ? 'text' : 'password'"></v-text-field>

      <div class='sign-button-area'>
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
import LedgerAPITransport from '../js/LedgerAPITransport.js'
import StellarWallet from '../js/StellarWallet.js'
import HorizonServer from '../js/HorizonServer.js'
const StellarSdk = require('stellar-sdk')

export default {
  props: ['donationPublicKey'],
  data() {
    return {
      visible: false,
      destinationPublicKey: '',
      donate: false,
      dialogMode: 'start',
      status: '',
      secretKey: '',
      sendingPayment: false,
      xlm: 10,
      showSecret: false,
      browserSupportMessage: '',
      ledgerAPI: null,
      horizon: null
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
    this.horizon = new HorizonServer('https://horizon.stellar.org', false)

    if (Utils.strOK(this.donationPublicKey)) {
      this.donate = true
      this.destinationPublicKey = this.donationPublicKey
    }

    if (LedgerAPITransport.isNodeTransport()) {
      this.browserSupportMessage = 'Error: Make sure "Browser Support" is disabled'
    } else {
      this.browserSupportMessage = 'Error: Make sure "Browser Support" is enabled'
    }

    this.ledgerAPI = new LedgerAPI()
  },
  methods: {
    buttonClick(id) {
      switch (id) {
        case 'useNano':
          this.dialogMode = 'useNano'
          this.status = ''
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
    sendWithNano() {
      const sourceWallet = StellarWallet.ledger(this.ledgerAPI, () => {
        this.status = 'Confirm transaction on Nano...'
      })

      this.sendPayment(sourceWallet)
    },
    sendWithSecret() {
      if (Utils.strOK(this.secretKey)) {
        this.status = 'Please enter your secret key'
      } else {
        this.sendPayment(StellarWallet.secret(this.secretKey))
      }
    },
    verifyAccounts(stellarWallet, destination) {
      // test if destination exists
      return this.horizon.server().loadAccount(destination)
        .then((destAccount) => {
          // proved that destination exists
          // get source public key to test existence

          return stellarWallet.publicKey()
        })
        .then((sourcePublicKey) => {
          return this.horizon.server().loadAccount(sourcePublicKey)
        })
        .then((sourceAccount) => {
          // proved that source and destination exists
          return sourceAccount
        })
    },
    sendPayment(sourceWallet) {
      const destination = this.destinationPublicKey
      if (!Utils.strOK(destination)) {
        this.status = 'Destination is blank'
        return
      }

      if (this.xlm < 1) {
        this.status = 'Lumens must be greater than 0'
        return
      }

      this.status = 'Building transaction...'
      this.sendingPayment = true

      this.verifyAccounts(sourceWallet, destination)
        .then((sourceAccount) => {
          const transaction = new StellarSdk.TransactionBuilder(sourceAccount)
            .addOperation(StellarSdk.Operation.payment({
              destination: destination,
              asset: StellarSdk.Asset.native(),
              amount: String(this.xlm)
            }))
            .build()

          return sourceWallet.signTransaction(transaction)
        })
        .then((signedTransaction) => {
          this.status = 'Submitting transaction...'

          return this.horizon.server().submitTransaction(signedTransaction)
        })
        .then((response) => {
          this.status = 'Payment successful!'

          // clear secret key
          this.secretKey = ''

          return null
        })
        .catch((error) => {
          if (error.message === 'connection failed') {
            this.status = this.browserSupportMessage
          } else {
            this.status = 'Error making payment: ' + error.message
          }
        })
        .finally(() => {
          this.sendingPayment = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-view {
    display: flex;
    flex-direction: column;

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
        margin: 10px;

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
