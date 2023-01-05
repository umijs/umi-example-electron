import { defineConfig } from '@umijs/max';
import { scripts, styles } from './splash';

export default defineConfig({
  history: {
    type: 'hash',
  },
  publicPath: 'auto',
  antd: {},
  access: false,
  model: {},
  initialState: false,
  request: {},
  outputPath: 'output',
  layout: false,
  title: 'Umi@4 Example Electron',
  mfsu: {},
  routes: [
    {
      path: '/',
      redirect: '/greeting',
    },
    {
      name: '首页',
      path: '/greeting',
      component: './Greeting',
    },
  ],
  npmClient: 'pnpm',
  scripts,
  styles,
  chainWebpack(config) {
    config
      .target('electron22-renderer')
      .externals({
        'node:fs/promises': "require('node:fs/promises')",
      })
      .end();
  },
});
