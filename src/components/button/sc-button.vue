<template>
  <button class="sc-button">{{text}}</button>
</template>

<script>
  export default {
    name: "sc-button",
    props: {
      text: {
        type: String,
        required: true,
        default: "Button"
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-button {
    color: $text-color;
  }
</style>