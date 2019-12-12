const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isMinify } = require('./utils')

console.log('进来了吗')
const MiniCssExtractArr = () => {
  return isMinify ? [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: "[id].css"
    })
  ] : [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: "[id].css"
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style/index.css',
      chunkFilename: "[id].css"
    })
  ]
}
module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue2': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // enable sub-packages to find babel config
          options: {
            rootMode: 'upward'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.md$/,
      //   use: ['vue-loader', '@vant/markdown-loader']
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...(MiniCssExtractArr())
  ]
};
