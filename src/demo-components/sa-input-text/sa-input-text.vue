<template>
    <input type="text" class="sa-input-text">   
</template>

<script>
export default {
    name: "sa-input-text"
}
</script>

<style lang="scss">
  @import '@scavold/core/styles/global';

  .sa-input-text {
    @include sa-input-text;
  }
</style>