const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/index.js',
    test: './src/js/test.js',
  },
  output: {
    filename: 'built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // 不会重复打包 packages
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'production',
};
