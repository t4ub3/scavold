<template>
  <section>
      <header>
          <slot name="header"></slot>
          <sc-button :iconLeft="{name: iconName}" @click.native="toggle"></sc-button>
      </header>
  </section>
</template>

<script>
import ScButton from "@scavold/button";

export default {
    name: "sc-slide-up",

    components: { ScButton },

    props: {
        initOpen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            isOpen: this.initOpen
        }
    },

    computed: {
        iconName() {
            return this.isOpen ? "chevron-down" : "chevron-up"; 
        }
    },

    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }

}
</script>

<style>

</style>