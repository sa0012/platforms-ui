const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

// 是否需要压缩成/\.min.js/文件
const isMinify = process.argv.indexOf('-p') !== -1
console.log(isMinify, 'isMinify')
module.exports = merge(config, {
  mode: 'production',
  entry: {
    platforms: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'platforms',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js'
  },
  // 配置vue的引用模式
  externals: {
    Vue: {
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