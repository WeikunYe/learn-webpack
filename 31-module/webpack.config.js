module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 多个 loader 用 use
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/i,
        // 排除
        exclude: /node_modules/,
        // 单个loader 用 loader
        loader: 'eslint-loader',
        // 只包含
        include: './src',
        // 优先执行
        enforce: 'pre', // post延后执行，不写中间执行
        // 单个loader配置
        options: {},
      },
      {
        // 以下配置只会生效一个
        oneOf: [],
      },
    ],
  },
};
