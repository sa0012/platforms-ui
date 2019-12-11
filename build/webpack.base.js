const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const assetsPath = function (_path) {
  const assetsSubDirectory = 'static'

  return path.posix.join(assetsSubDirectory, _path)
}
console.log('进来了吗')
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
          // {
          //   loader: 'sass-loader',
          //   options: {
          //     paths: [path.resolve(__dirname, 'node_modules')]
          //   }
          // }
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
    new MiniCssExtractPlugin({
      filename: '[name]/[name].min.css',
      chunkFilename: "[id].css"
    }),
    // new MiniCssExtractPlugin({
    //   filename: assetsPath('../[name]/style.css'),
    //   chunkFilename: "[id].css"
    // })
  ]
};
