<template>
<div class='dialog-header'>
  <div class='dialog-header-text'>
    <p>{{title}}</p>
  </div>

  <div class='left-side-buttons'>
    <v-tooltip open-delay='200' bottom>
      <v-btn small v-if='showBack' class='dialog-back-button' icon dark @click="buttonClick('back')" slot="activator">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <span>Go Back</span>
    </v-tooltip>
  </div>

  <div class='right-side-buttons'>
    <v-tooltip open-delay='200' bottom>
      <v-btn small v-if='showPrint' icon dark @click="buttonClick('print')" slot="activator">
        <v-icon>print</v-icon>
      </v-btn>
      <span>Print</span>
    </v-tooltip>

    <v-tooltip open-delay='200' bottom>
      <v-btn small icon dark @click="buttonClick('close')" slot="activator">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
      <span v-html='tooltip'></span>
    </v-tooltip>
  </div>

</div>
</template>

<script>
export default {
  props: ['title', 'help', 'showPrint', 'showBack'],
  computed: {
    tooltip: function() {
      if (this.help) {
        return 'Help'
      }
      return 'Close'
    },
    icon: function() {
      return this.help ? 'help_outline' : 'close'
    }
  },
  methods: {
    buttonClick(buttonID) {
      this.$emit(buttonID)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/styles.scss';
.dialog-header {
    width: 100%;
    display: flex;
    position: relative;
    background: $active-color;
    padding-right: 6px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    flex: 0 0 36px;

    button {
        margin: 2px;
    }

    .left-side-buttons {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }

    .right-side-buttons {
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .dialog-header-text {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        text-align: center;

        display: flex;
        justify-content: center;
        flex-direction: column;

        p {
            color: $text-color;
            font-weight: $bold;
            font-size: 1.1em;
            margin: 0;
            user-select: none;
        }
    }
}
</style>
