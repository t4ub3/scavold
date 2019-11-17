import ScIcon from "./sc-icon.vue";

export default {
  title: 'Icon'
};

export const basic = () => ({
  components: { ScIcon },
  template: '<sc-icon name="kiwi-bird"></sc-icon>'
});