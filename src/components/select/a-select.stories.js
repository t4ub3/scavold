import ASelect from './a-select'

export default {
    title: 'ASelect'
  };
  
  export const text = () => ({
    components: { ASelect },
    template: '<a-select name="minimal" size="2"></a-select>'
  });