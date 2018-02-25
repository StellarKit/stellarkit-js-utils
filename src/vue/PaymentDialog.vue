<template>
<v-dialog lazy v-model='visible' scrollable @keydown.esc="visible = false" max-width="600">
  <!-- if visible added below so the view will be destroyed and recreated to reset state -->
  <div v-if='visible' class='main-container'>
    <donate-view :donationPublicKey='donationPublicKey' />

    <div class='button-holder'>
      <v-btn round color='primary' @click="visible = false">
        Close
      </v-btn>
    </div>
  </div>
</v-dialog>
</template>

<script>
import PaymentView from './PaymentView.vue'

export default {
  props: ['ping', 'donationPublicKey'],
  components: {
    'donate-view': PaymentView
  },
  watch: {
    ping: function () {
      this.visible = true
    }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';

.main-container {
    @include standard-dialog-contents();

    padding: 10px;

    .button-holder {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
