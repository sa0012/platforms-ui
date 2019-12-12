const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isMinify } = require('./utils')
const isProd = process.env.NODE_ENV

console.log('进来了吗')
const MiniCssExtractArr = () => {
  return isMinify ? [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[id].css'
    })
  ] : [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
      chunkFilename: '[id].css'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/style/index.css',
      chunkFilename: '[id].css'
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
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        sideEffects: true,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...(MiniCssExtractArr())
  ]
}
