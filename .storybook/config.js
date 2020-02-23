import { addParameters, configure } from '@storybook/vue';
import '../src/core/styles/base.scss';

addParameters({
  viewport: {
    viewports: {
        minXS: {
            name: 'XS Minimal',
            styles: {
                width: '300px',
                height: '600px'
            }
        },
        maxXS: {
            name: 'XS Maximal',
            styles: {
                width: '479px',
                height: '958px'
            }
        },
        minSM: {
            name: 'SM Minimal',
            styles: {
                width: '480px',
                height: '960px'
            }
        },
        maxSM: {
            name: 'SM Maximal',
            styles: {
                width: '767px',
                height: '1534px'
            }
        },
        minMD: {
            name: 'MD Minimal',
            styles: {
                width: '768px',
                height: '1280px'
            }
        },
        maxMD: {
            name: 'MD Maximal',
            styles: {
                width: '1023px',
                height: '800px'
            }
        },
        minLG: {
            name: 'LG Minimal',
            styles: {
                width: '1024px',
                height: '800px'
            }
        }
    }
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);