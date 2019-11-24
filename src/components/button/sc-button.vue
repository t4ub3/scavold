<template>
  <component :is="tag" class="sc-button">
    <sc-icon v-if="iconLeft" v-bind="iconLeft"></sc-icon>
    {{ text }}
    <sc-icon v-if="iconRight" v-bind="iconRight"></sc-icon>
  </component>
</template>

<script>
  import ScIcon from "@scavold/icon";

  export default {
    name: "sc-button",
    components: { ScIcon },
    props: {
      tag: {
        type: String,
        default: "button",
        validator: value => {
          value.match( /^(button|a)$/ );
        }
      },
      text: {
        type: String,
        default: ""
      },
      iconLeft: {
        type: Object
      },
      iconRight: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-button {
    @include sa-button;
  }
</style>