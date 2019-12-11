const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge')
const config = require('./webpack.base')
// 是否需要压缩成/\.min.js/文件
const isMinify = process.argv.indexOf('-p') !== -1
var modules = {}
var cPath = path.join(__dirname, '../src')
var files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function (name) {
    var p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}
module.exports = merge(config, {
  mode: 'production',
  entry: modules,
  output: {
    path: path.join(process.cwd(), './lib'),
    publicPath: '/dist/',
    library: 'platforms',
    libraryTarget: 'commonjs2',
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