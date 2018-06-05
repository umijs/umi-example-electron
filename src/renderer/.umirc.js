import { join } from 'path';

export default {
  disableServiceWorker: true,
  disableDynamicImport: true,
  hashHistory: true,
  publicPath: './static/',
  outputPath: '../../app/dist/renderer',
  plugins: [
    ['umi-plugin-dva', {
      immer: true,
    }],
  ],
};
