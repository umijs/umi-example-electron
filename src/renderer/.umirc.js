export default {
  disableDynamicImport: true,
  publicPath: './static/',
  outputPath: '../../app/dist/renderer',
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true
      }
    ]
  ],
  externals(context, request, callback) {
    let isExternal = false;
    const load = [
      'electron',
      'fs',
      'path',
      'os',
      'url',
      'child_process'
    ];
    if (load.includes(request)) {
      isExternal = `require("${request}")`;
    }
    callback(null, isExternal);
  },
};
