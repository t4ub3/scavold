<template>
  <div class="sc-input-radio">
    <input type="radio"
           :value="value"
           :name="name"
           @change="$emit('select', $event.target.value)"
           v-model="selectedValue" />
    <label>{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: "sc-input-radio",
    components: {  },
    model: {
      prop: "selectedValue",
      event: "select"
    },
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      selectedValue: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-input-radio {
    
  }
</style>