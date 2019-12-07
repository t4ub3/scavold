import { configure } from '@storybook/vue';
import '../src/core/styles/base.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);