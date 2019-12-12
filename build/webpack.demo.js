const path = require('path')
const webpack = require('webpack')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./config')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  devtool: '#eval-source-map',
  entry: {
    docs: './examples/entry.js'
  },
  output: {
    path: path.resolve(process.cwd(), './examples/platforms-ui/'),
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    publicPath: '/',
    hot: true
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimizer: []
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
      favicon: './examples/favicon.ico'
    }),
    new ProgressBarPlugin(),
    new webpack.LoaderOptionsPlugin(
      {
        minimize: true,
        debug: false,
        options: {
          context: __dirname
        },
        vue: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    )
  ]
})

if (isProd) {
  webpackConfig.externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs'
  }

  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  )

  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    })
  )

  webpackConfig.optimization.splitChunks = {
    cacheGroups: {
      vendor: {
        test: /\/src\//,
        name: 'platforms-ui',
        chunks: 'all'
      }
    }
  }

  webpackConfig.devtool = false
}

module.exports = webpackConfig
