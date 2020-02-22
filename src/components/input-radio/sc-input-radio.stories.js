import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ScInputRadio from "./sc-input-radio.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Components/Input Radio',
  decorators: [withKnobs]
};

export const typical = () => ({
  components: { ScInputRadio },
  template: buildTemplate([
    '<sc-input-radio label="Input Radio Typical" value="radio_typical"></sc-input-radio>'
  ])
});

export const disabled = () => ({
  components: { ScInputRadio },
  template: buildTemplate([
    '<sc-input-radio label="Input Radio Disabled" value="radio_disabled" :disabled="true"></sc-input-radio>',
    '<sc-input-radio label="Input Radio Disabled Checked" value="radio_disabled_checked" :disabled="true" selectedValue="radio_disabled_checked"></sc-input-radio>'
  ])
});

export const vModel = () => ({
  components: { ScInputRadio },
  data: () => {
    return {
      radioSelection: "radio_1"
    }
  },
  template: buildTemplate([
    '<sc-input-radio label="Input Radio 1" value="radio_1" v-model="radioSelection"></sc-input-radio>',
    '<sc-input-radio label="Input Radio 2" value="radio_2" v-model="radioSelection"></sc-input-radio>'
  ])
});

export const configurable = () => ({
  components: { ScInputRadio },
  props: {
    label: {
      default: text('Label', 'Input Label')
    },
    value: {
      default: text('Value', 'input_value')
    },
    name: {
      default: text('Name', 'input_name')
    },
    selectedValue: {
      default: text('Selected Value', 'input_value')
    },
    id: {
      default: text('ID', 'input_123')
    },
    disabled: {
      default: boolean('Disabled', false)
    }
  },
  template: buildTemplate([
    '<sc-input-radio :label="label" :value="value" :name="name" :selectedValue="selectedValue" :id="id" :disabled="disabled"></sc-input-radio>'
  ])
});