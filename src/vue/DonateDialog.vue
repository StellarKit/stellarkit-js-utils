<template>
<v-dialog lazy v-model='visible' scrollable @keydown.esc="visible = false" max-width="600">
  <!-- if visible added below so the view will be destroyed and recreated to reset state -->
  <div v-if='visible' class='main-container'>
    <donate-view :nodeEnv='nodeEnv' :donationPublicKey='donationPublicKey' />

    <div class='button-holder'>
      <v-btn round color='primary' @click="visible = false">
        Close
      </v-btn>
    </div>
  </div>
</v-dialog>
</template>

<script>
export default {
  props: ['ping', 'nodeEnv', 'donationPublicKey'],
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

    padding: 20px;

    .button-holder {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
