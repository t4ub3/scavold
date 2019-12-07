import ScButton from "./sc-button.vue";

export default {
  title: 'Button'
};

export const typical = () => ({
  components: { ScButton },
  template: '<sc-button text="Typical Button"></sc-button>'
});

export const tags = () => ({
  components: { ScButton },
  template: `<div>
              <sc-button text="Button"></sc-button>
              <br/>
              <br/>
              <sc-button tag="a" text="Anchor"></sc-button>
            </div>`
});

export const icons = () => ({
  components: { ScButton },
  template: `<div>
  <sc-button text="Icon Left" :iconLeft="{name: 'kiwi-bird'}"></sc-button>
  <br/>
  <br/>
  <sc-button text="Icon Right" :iconRight="{name: 'kiwi-bird'}"></sc-button>
  <br/>
  <br/>
  <sc-button text="Both Icons" :iconLeft="{name: 'kiwi-bird'}" :iconRight="{name: 'kiwi-bird'}"></sc-button>
  <br/>
  <br/>
  <sc-button title="Icon Only" :iconRight="{name: 'kiwi-bird'}"></sc-button>
  <sc-button title="Icon Only" :iconLeft="{name: 'kiwi-bird'}"></sc-button>
</div>`
});

export const themes = () => ({
  components: { ScButton },
  template: `<div>
  <sc-button text="Dark Theme"></sc-button>
  <br/>
  <br/>
  <sc-button theme="bright" text="Bright Theme"></sc-button>
</div>`
});