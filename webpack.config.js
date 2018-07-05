import { join } from 'path';

const cwd = process.cwd();

export default function (webpackConfig, { webpack }) {
  webpackConfig.entry = {
    main: './src/main/index.js',
  };
  webpackConfig.output.path = join(cwd, './app/dist/main');
  webpackConfig.target = 'electron';
  webpackConfig.externals = (context, request, callback) => {
    callback(null, request.charAt(0) === '.' ? false : `require("${request}")`);
  };
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),
  );
  return webpackConfig;
};
