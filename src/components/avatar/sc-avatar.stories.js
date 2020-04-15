import ScAvatar from "./sc-avatar.vue";
import { buildTemplate } from "../../../.storybook/helpers";
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

export default {
  title: "Components/Avatar",
  decorators: [withKnobs],
};

export const typical = () => ({
  components: { ScAvatar },
  template: buildTemplate(['<sc-avatar name="Julia Neumann"></sc-avatar>']),
});

export const withImage = () => ({
  components: { ScAvatar },
  template: buildTemplate([
    '<sc-avatar imagePath="/img/cat.jpg" name="Katze"></sc-avatar>',
  ]),
});

export const configurable = () => ({
  components: { ScAvatar },
  props: {
    imagePath: {
      default: text("Image Path", "/img/cat.jpg"),
    },
    name: {
      default: text("Name", "Julia Frau Neumann"),
    },
  },
  template: buildTemplate([
    '<sc-avatar :imagePath="imagePath" :name="name"></sc-avatar>',
  ]),
});
