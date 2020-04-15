<template>
  <div class="sc-avatar">
    <img
      v-if="imagePath"
      :src="imagePath"
      class="sc-avatar__image"
      :alt="name"
    />
    <div v-else class="sc-avatar__fallback">{{ shortenedName }}</div>
  </div>
</template>

<script>
export default {
  name: "sc-avatar",
  props: {
    imagePath: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    shortenedName() {
      return this.name.split(" ").reduce((acc, current, index, arr) => {
        if (index === 0 || index === arr.length - 1) {
          acc += current.charAt(0).toUpperCase();
        }
        return acc;
      }, "");
    },
  },
};
</script>

<style lang="scss">
@import '@scavold/core/styles/global';

.sc-avatar {
    height: 38px;
    width: 38px;
    &__image,
    &__fallback {
        @include typo-xl;
        border-radius: 50%;
        height: 100%;
        display: flex;
        font-weight: bold;
        align-items: center;
        justify-content: center;
    }
    &__fallback {
        color: $color-primary-lighter-1;
        background-color: $color-primary-lighter-4;
    }
}
</style>
