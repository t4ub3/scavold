<template>
  <div class="sc-input-radio">
    <input class="sc-input-radio sc-input-radio__input"
            type="radio"
           :value="value"
           :name="name"
           @change="$emit('select', $event.target.value)"
           v-model="selectedValue" />
    <label class="sc-input-radio sc-input-radio__label">
      {{ label }}
    </label>
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
    @include sa-input-radio;

    &__input {
      display: none;
    }

    &__label {
      padding-left: 24px;
      position: relative;
      &::before {
        position: absolute;
        left: $distance-xs;
        top: $distance-xs;
        height: 10px;
        width: 10px;
        border: solid 2px black;
      }
    }
  }
</style>