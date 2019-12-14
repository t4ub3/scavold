import ScIcon from "./sc-icon.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Icon'
};

export const typical = () => ({
  components: { ScIcon },
  template: buildTemplate([
    '<sc-icon name="kiwi-bird"></sc-icon>'
  ])
});