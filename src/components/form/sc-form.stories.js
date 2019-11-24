import ScForm from "./sc-form.vue";

export default {
  title: 'Form'
};

const formFields = [
  {component: 'sc-input-radio', props: {label: 'Radio 1', value: 'radio_1', name: 'radios'}},
  {component: 'sc-input-radio', props: {label: 'Radio 2', value: 'radio_2', name: 'radios'}}
]

export const typical = () => ({
  components: { ScForm },
  template: `<sc-form :fields='${JSON.stringify(formFields)}'></sc-form>`
});
