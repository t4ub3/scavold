import ScInputRadio from "./sc-input-radio.vue";

export default {
  title: 'Input Radio'
};

export const typical = () => ({
  components: { ScInputRadio },
  template: '<sc-input-radio label="Input Radio Typical" value="radio_typical"></sc-input-radio>'
});

export const vModel = () => ({
  components: { ScInputRadio },
  data: () => {
    return {
      radioSelection: "radio_1"
    }
  },
  template: `<div><sc-input-radio label="Input Radio 1" value="radio_1" v-model="radioSelection"></sc-input-radio>
            <br />
            <sc-input-radio label="Input Radio 2" value="radio_2" v-model="radioSelection"></sc-input-radio></div>`
});
