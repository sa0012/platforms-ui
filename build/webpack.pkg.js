const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const { modulesFunc, allBuild, isMinify } = require('./utils')

module.exports = merge(config, {
  mode: 'production',
  entry: isMinify ? allBuild('platforms', '../es/index.js') : modulesFunc('../src'),
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'platforms',
    libraryTarget: isMinify ? 'umd' : 'commonjs2',
    filename: isMinify ? '[name].min.js' : '[name]/index.js'
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
