import ScButton from "./sc-button.vue";

export default {
  title: 'Button'
};

export const text = () => ({
  components: { ScButton },
  template: '<sc-button text="My Button"></sc-button>'
});