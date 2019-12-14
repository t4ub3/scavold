import ScInputRadio from "./sc-input-radio.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Input Radio'
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
