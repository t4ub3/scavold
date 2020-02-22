import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import ScButton from "./sc-button.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Components/Button',
  decorators: [withKnobs]
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

export const configurable = () => ({
  components: { ScButton },
  props: {
    tag: {
      default: select('Tag', ['button', 'a'], 'button')
    },
    text: {
      default: text('Text', 'Button Text')
    },
    iconLeft: {
      default: object('Icon Left', {name: 'kiwi-bird'})
    },
    iconRight: {
      default: object('Icon Ŕight', null)
    }
  },
  template:  buildTemplate([
    '<sc-button :tag="tag" :text="text" :iconLeft="iconLeft" :iconRight="iconRight"></sc-button>'
  ])
});
