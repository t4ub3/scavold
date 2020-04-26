import ScSlideUp from "./sc-slide-up.vue";
import { buildTemplate } from "../../../.storybook/helpers";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

export default {
  title: "Components/SlideUp",
  decorators: [withKnobs],
};

export const typical = () => ({
  components: { ScSlideUp },
  template: buildTemplate(['<sc-slide-up></sc-slide-up>']),
});