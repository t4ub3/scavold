<template>
    <select class="select"
            :name="name"
            :size="size"
    >
        <slot></slot>
    </select>       
</template>

<script>
    export default {
        name: "a-select",
        props: {
            /**
             * name of the select field, used as id.
             */
            name: {
                type: String,
                default: null,
                required: true
            },
            /**
             * defines the number of visible elements (without scrolling).
             */
            size: {
                type: String,
                default: null,
                required: true,
            },
            /**
             * label of the select field.
             */
            label: {
                type: String,
                default: null
            }
        }
    }
</script>

