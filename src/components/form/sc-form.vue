<template>
  <form class="sc-form">
      <component v-for="field in fields"
                 :is="field.component"
                 :key="field.component + field.props.label"
                 v-bind="field.props"
                 v-model="radioSelection">
      </component>
      {{ radioSelection }}
      <button type="button" @click="radioSelection = 'radio_1'">Set Radio 1</button>
      <button type="button" @click="radioSelection = 'radio_2'">Set Radio 2</button>
  </form>
</template>

<script>
  import ScInputRadio from "@scavold/input-radio";

  export default {
    name: "sc-form",
    components: { ScInputRadio },
    props: {
      fields: {
        type: Array,
        default: () => {[]}
      }    
    },
    data: () => {
      return {
        radioSelection: ""
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-form {
    
  }
</style>