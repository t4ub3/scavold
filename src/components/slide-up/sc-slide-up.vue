<template>
  <div class="sc-slide-up">
    <section class="sc-slide-up__main">
      <header class="sc-slide-up__header">
        <div class="sc-slide-up__header-slot">
          <slot name="header"></slot>
        </div>
        <sc-button
          :iconLeft="{ name: iconName }"
          @click.native="toggle"
        ></sc-button>
      </header>
      <transition name="height">
        <div v-if="isOpen" class="sc-slide-up__content">
          <slot name="content"></slot>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import ScButton from "@scavold/button";

export default {
  name: "sc-slide-up",

  components: { ScButton },

  props: {
    initOpen: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOpen: this.initOpen,
    };
  },

  computed: {
    iconName() {
      return this.isOpen ? "chevron-down" : "chevron-up";
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
@import "@scavold/core/styles/global";
@include height-transition;

.sc-slide-up {
  height: 42px;
  position: relative;
  width: 100%;

  &__main {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    align-content: space-between;
    align-items: center;
    padding-left: 8px;
    height: 42px;
    width: 100%;
    background-color: $color-primary;
  }

  &__header-slot {
    overflow: hidden;
    flex-grow: 1;
  }
  
  &__content {
    padding: 8px;
    border: 1px solid $color-primary;
    border-top: none;
    overflow-y: hidden;
  }
}
</style>
