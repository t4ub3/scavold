import SaInputText from "./sa-input-text.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Core/Input Text'
};

export const typical = () => ({
  components: { SaInputText },
  template: buildTemplate([
    '<sa-input-text placeholder="Input Text Placeholder"></sa-input-text>',
    '<sa-input-text value="Input Text"></sa-input-text>'
  ])
});

export const disabled = () => ({
  components: { SaInputText },
  template: buildTemplate([
    '<sa-input-text disabled="disabled" placeholder="Input Text Placeholder Disabled"></sa-input-text>',
    '<sa-input-text disabled="disabled" value="Input Text Disabled"></sa-input-text>'
  ])
});
