<template>
  <label class="sc-input-radio"
         :for="id">
    <input class="sc-input-radio__input"
           type="radio"
           :value="value"
           :name="name"
           :id="id"
           :disabled="disabled"
           :checked="selectedValue === value"
           @change="$emit('select', $event.target.value)" />
    <div class="sc-input-radio__label">{{ label }}</div>
  </label>
</template>

<script>
  export default {
    name: "sc-input-radio",
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
      },
      id: {
        type: String,
        default: () => "sc-input-radio_" + Math.random().toString(36).substring(2, 15)
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sc-input-radio {
    @include sa-input-radio;
  }
</style>