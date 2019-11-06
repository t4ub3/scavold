import MSelect from './m-select.vue';

export default {
    title: 'MSelect'
  };
  
  export const text = () => ({
    components: { MSelect },
    template: `
    <m-select :placeholder="'please select:'" :name="'name'" :options="[
        {
            text: 'option 1',
            value: '1'
        },
        {
            text: 'option 2',
            value: '2',
        },
        {
            text: 'option 3',
            value: '3'
        }
    ]"></m-select>
    `
  });