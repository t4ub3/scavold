<template>
    <component class="selectfield"
            :is="tag"
    >
        <a-select 
                class="selectfield__select"
                :size="size"
                :name="name"
        >
            <a-option v-for="(option, index) in optionsWithPlaceholder" 
                      :key="index"
                      :text="option.text"
                      :disabled="option.disabled"
                      :value="option.value"
                      :selected="(option.text === selected)"
            >
            </a-option>
        </a-select>
        <ul>
            <li class="selectfield__option" @click="toggleOpen()">{{ selected }}</li>
            <li v-for="(option, index) in options"
                    :class="listClass" 
                    :key="index"
                    @click="selectAndClose(option.text)"
            >
                {{ option.text }}
            </li>
        </ul>
    </component>
</template>

<script>
    import ASelect from "@scavold/a-select/a-select"
    import AOption from "@scavold/a-option/a-option"
    
    /**
     * TODO
     */
    export default {
        name: "m-select",
        components: { ASelect, AOption },
        data() {
            return {
                isOpen: false,
                selected: this.placeholder,
            }
        },
        props: {
            /**
             * the html element used for the select field.
             */
            tag: {
                type: String,
                default: "div",
                validator: value => {
                    return value.match(/(div|section)/)
                },
            },
            /**
             * a placeholder for the select field.
             */
            placeholder: {
                type: String,
                default: null
            },
            /**
             * array of all available options
             */
            options: {
                type: Array,
                default: null,
                required: true
            },
            /**
             * set to a bigger number to switch from dropdown to list. defines the number of visible elements (without scrolling).
             */
            size: {
                type: String,
                default: "1"
            },
            /**
             * name of the select field, used as id.
             */
            name: {
                type: String,
                default: null,
                required: true
            },
            validation: {
                type: Object,
                default: function() {
                    return {
                        $error: false,
                        $params: {},
                    }
                },
                required: false,
            },
        },
        computed: {
            optionsWithPlaceholder: function () {
                let finalOptions = [...this.options];
                if (this.placeholder !== null) {
                    let placeholder = this.placeholder;
                    finalOptions.unshift({
                        text: placeholder,
                        selected: true,
                        disabled: true,
                    });
                }
                return finalOptions;
            },
            listClass: function() {
                return this.isOpen ? "selectfield__option" : "selectfield__option selectfield__option--hidden";
            }
        },
        methods: {
            toggleOpen() {
                this.isOpen = !this.isOpen;
            },
            selectAndClose(text) {
                this.toggleOpen();
                this.selected = text;
            }
        }
        
    }
</script>

<style lang="scss">
    
    .selectfield {
        &__select {
        }
        
        &__option {
            background: gray;
            border-top:1px solid blue;
            padding: 4px;

            &--hidden {
                display: none;
            }
        }
    }    
</style>