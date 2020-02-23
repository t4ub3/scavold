import { withKnobs, text, select } from '@storybook/addon-knobs';
import ScIcon from "./sc-icon.vue";
import { buildTemplate } from "../../../.storybook/helpers";

export default {
  title: 'Components/Icon',
  decorators: [withKnobs]
};

export const typical = () => ({
  components: { ScIcon },
  template: buildTemplate([
    '<sc-icon name="kiwi-bird"></sc-icon>'
  ])
});

export const configurable = () => ({
  components: { ScIcon },
  props: {
    name: {
      default: text('Name', 'kiwi-bird')
    },
    collection: {
      default: select('Collection', ['regular', 'solid', 'brand'], 'solid')
    }
  },
  template: buildTemplate([
    '<sc-icon :name="name" :collection="collection"></sc-icon>'
  ])
});