<template>
<v-dialog lazy v-model='visible' scrollable @keydown.esc="visible = false" max-width="600">
  <div class='main-container'>
    <div v-if='!showPurchase' class='start-choice'>
      <div>What would you like to use to purchase LMB tokens</div>
      <div class='button-holder'>
        <v-btn small @click="buttonClick('bitcoin')">Bitcoin</v-btn>
        <v-btn small @click="buttonClick('ethereum')">Ethereum</v-btn>
      </div>
    </div>

    <div v-if='showPurchase' class="purchase-container">
      <v-btn small @click="buttonClick('back')">Back</v-btn>
      <div v-html="sendMessage "></div>
      <div>Address = {{address}}</div>
      <p><strong>Rinkeby testnet. Do not send real coins!</strong></p>
      <p>Exchange rate: 1 ETH = 1 LMB token</p>
      <p><a href="https://github.com/stellar/go/pull/81 " target="_blank ">Instructions</a></p>
      <div class="progress ">
        <v-progress-linear v-model="progress "></v-progress-linear>
      </div>
      <div>Status = {{status}}</div>
      <div>Public Key = {{publicKey}}</div>
      <div>Secret Key = {{secretKey}}</div>
    </div>

    <div class='button-holder'>
      <v-btn round color='primary' @click="visible = false">
        Close
      </v-btn>
    </div>
  </div>
</v-dialog>
</template>

<script>
import * as Bifrost from '../js/Bifrost.js'

export default {
  props: ['ping', 'params', 'allowHTTP'],
  data() {
    return {
      showPurchase: false,
      purchaseCoin: '',
      progress: 0,
      session: null,
      status: '',
      address: 'loading...',
      publicKey: '',
      secretKey: '',
      visible: false
    }
  },
  watch: {
    ping: function () {
      this.visible = true
    }
  },
  computed: {
    sendMessage: function () {
      if (this.purchaseCoin === 'btc') {
        return '<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>'
      } else {
        return '<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>'
      }
    }
  },
  methods: {
    initBifrost() {
      let opts = {}

      if (this.allowHTTP) {
        opts = {
          allowHttp: true
        }
      }
      this.session = new Bifrost.Session(this.params, opts) // ### for testing, allowHttp
    },
    startBitcoin() {
      this.showPurchase = true
      this.purchaseCoin = 'btc'
      this.initBifrost()

      this.session.startBitcoin(this.onEvent).then((result) => {
        this.setStatus('Waiting for a transaction...', 10)
        this.address = result.address
        this.publicKey = result.keypair.publicKey()
        this.secretKey = result.keypair.secret()
      })
    },
    startEthereum() {
      this.showPurchase = true
      this.purchaseCoin = 'eth'
      this.initBifrost()

      this.session.startEthereum(this.onEvent).then((result) => {
        this.setStatus('Waiting for a transaction...', 10)
        this.address = result.address
        this.publicKey = result.keypair.publicKey()
        this.secretKey = result.keypair.secret()
      })
    },
    setStatus(status, progress) {
      this.progress = progress
      this.status = status
    },
    onEvent(event, data) {
      switch (event) {
        case Bifrost.TransactionReceivedEvent:
          this.setStatus('Transaction received, creating account...', 20)
          break
        case Bifrost.AccountCreatedEvent:
          this.setStatus('Account created, creating trust lines...', 40)
          break
        case Bifrost.TrustLinesCreatedEvent:
          this.setStatus('Trust lines created, waiting for tokens...', 60)
          break
        case Bifrost.AccountCreditedEvent:
          this.setStatus('Account credited, exchanging...', 80)
          break
        case Bifrost.PurchasedEvent:
          this.setStatus('Congrats! TOKE purchased.', 100)
          break
        case Bifrost.ErrorEvent:
          this.setStatus('Error!', 0)
          console.log(JSON.stringify(data))
          break
        default:
          this.setStatus('default swtich reached!', 0)
          break
      }
    },
    buttonClick(id) {
      switch (id) {
        case 'test':
          this.test()
          break
        case 'bitcoin':
          this.startBitcoin()
          break
        case 'ethereum':
          this.startEthereum()
          break
        case 'back':
          this.showPurchase = false
          break
        default:
          console.log('no button with that name')
          break
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/styles.scss';

.main-container {
    @include standard-dialog-contents();

    .start-choice {
        font-size: 1.6em;
        flex-direction: column;
        align-items:: center;
        justify-content: center;
        margin: 50px;

        .button-holder {
            padding: 10px;
            display: flex;
            justify-content: center;
        }
    }

    .purchase-container {
        background-color: #ffffff;
        width: 600px;
        text-align: center;
        padding: 50px;
    }

    .button-holder {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
