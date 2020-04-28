import ScSlideUp from "./sc-slide-up.vue";
import { buildTemplate } from "../../../.storybook/helpers";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default {
  title: "Components/SlideUp",
  decorators: [withKnobs],
};

export const typical = () => ({
  components: { ScSlideUp },
  template: buildTemplate([
    '<sc-slide-up><template v-slot:header><h2 style="color: white">Header</h2></template><template v-slot:content><p>' +
    lorem +
    "</p></template></sc-slide-up>",
  ], {padding: "100px 8px"}),
});
