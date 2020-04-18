<template>
  <component :is="tag" :class="['sc-button', `sc-button--${theme}`]">
    <sc-icon :class="['sc-button__icon', text ? 'sc-button__icon--left' : '']" v-if="iconLeft" v-bind="iconLeft"></sc-icon>
    {{ text }}
    <sc-icon :class="['sc-button__icon', text ? 'sc-button__icon--right' : '']" v-if="iconRight" v-bind="iconRight"></sc-icon>
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
          return ["button", "a"].includes(value);
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
      },
      theme: {
        type: String,
        default: "primary",
        validator: value => {
          return ["primary", "plain"].includes(value);
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-button {
    @include sa-button;

    &__icon {
      &--left {
        padding-right: $distance-xs;
      }
      &--right {
        padding-left: $distance-xs;
      }
    }

    &--plain {
      background-color: transparent;
      color: $color-primary;
    }
  }
</style>