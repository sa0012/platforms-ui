const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const { isMinify } = require('./utils')

module.exports = merge(config, {
  mode: 'production',
  entry: {
    platforms: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'platforms',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    // https://github.com/webpack/webpack/issues/6522
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
})
