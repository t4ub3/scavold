<template>
    <font-awesome-icon v-if="!iconDefinition && !fetched" 
                       icon="spinner"
                       spin>
    </font-awesome-icon>
    <font-awesome-icon v-else-if="!iconDefinition"
                       icon="exclamation">
    </font-awesome-icon>
    <font-awesome-icon v-else 
                       :icon="iconDefinition">
    </font-awesome-icon>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faExclamation, faSpinner]);

export default {
    name: "sc-icon",
    components: { FontAwesomeIcon },
    props: {
        name: {
            type: String,
            default: null,
            required: true
        },
        collection: {
            type: String,
            default: "solid",
            validator: value => {
                return /(regular|solid|brand)/.test(value);
            }
        }
    },
    data() {
        return {
            fetched: null,
            fetchedIcon: null,
            iconPrefixes: {
                solid: "fas",
                regular: "far",
                brand: "fab"
            }
        };
    },
    computed: {
        iconDefinition() {
            if (this.fetchedIcon) {
                return this.fetchedIcon;
            }
            if (
                library.definitions[this.iconPrefix] &&
                library.definitions[this.iconPrefix][this.name]
            ) {
                return {
                    icon: library.definitions[this.iconPrefix][this.name],
                    iconName: this.name,
                    prefix: this.iconPrefix
                };
            }
            return null;
        },
        iconFileName() {
            let nameParts = this.name.split("-");
            let pascalCasedName = nameParts.map(
                element => element.charAt(0).toUpperCase() + element.slice(1)
            ).join("");
            return `fa${pascalCasedName}`;
        },
        iconPrefix() {
            return this.iconPrefixes[this.collection];
        }
    },
    methods: {
        fetchIcon() {
            this.fetched = false;
            return import(
                /* webpackChunkName: "fonts/[request]" */
                `@fortawesome/free-${this.collection}-svg-icons/${this.iconFileName}.js`
            )
                .then(response => {
                    this.fetched = true;
                    if (response && response.definition) {
                        this.fetchedIcon = response.definition;
                        library.add(response.definition);
                    }
                })
                .catch((error) => {
                    console.warn(error)
                    this.fetched = true;
                });
        }
    },
    created() {
        if (!this.iconDefinition) {
            this.fetchIcon();
        }
    },
    watch: {
        name(newName) {
            if (!this.iconDefinition || newName != this.iconDefinition.iconName) {
                this.fetchedIcon = null;
                this.fetchIcon();
            }
        },
        collection(newCollection) {
            if (!this.iconDefinition || this.iconPrefixes[newCollection] != this.iconDefinition.iconPrefix) {
                this.fetchedIcon = null;
                this.fetchIcon();
            }
        }
    },    
};
</script>