import ScButton from "./sc-button.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Button'
};

export const typical = () => ({
  components: { ScButton },
  template:  buildTemplate([
    '<sc-button text="Typical Button"></sc-button>'
  ])
});

export const tags = () => ({
  components: { ScButton },
  template: buildTemplate([
    '<sc-button text="Button"></sc-button>',
    '<sc-button tag="a" text="Anchor"></sc-button>'
  ])
});

export const icons = () => ({
  components: { ScButton },
  template: buildTemplate([
    '<sc-button text="Icon Left" :iconLeft="{name: \'kiwi-bird\'}"></sc-button>',
    '<sc-button text="Icon Right" :iconRight="{name: \'kiwi-bird\'}"></sc-button>',
    '<sc-button text="Both Icons" :iconLeft="{name: \'kiwi-bird\'}" :iconRight="{name: \'kiwi-bird\'}"></sc-button>',
    '<sc-button title="Icon Only" :iconLeft="{name: \'kiwi-bird\'}"></sc-button>'
  ])
});
