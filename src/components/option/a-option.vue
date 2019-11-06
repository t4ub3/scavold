<template>
    <option class="option"
            :selected="selected"
            :value="value"
    >
        {{ text }}
    </option>
</template>

<script>
    export default {
        name: "a-option",
        props: {
            /**
             * marks the default value in an select box.
             */
            selected: {
                type: Boolean,
                default: false
            },
            /**
             * the displayed text.
             */
            text: {
                type: String,
                default: null,
                required: true
            },
            /**
             * the submitted value. if not set, text is submitted.
             */
            value: {
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss">

    .option {
        background-color: white;
        &--selected {
            color: white;
            background-color: gray;
        }
    }
</style>