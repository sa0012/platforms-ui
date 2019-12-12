const path = require('path')
const fs = require('fs')

exports.modulesFunc = (filePath) => {
  var modules = {}
  var cPath = path.join(__dirname, filePath)
  var files = fs.readdirSync(cPath)
  if (files) {
    files.forEach(function (name) {
      var p = path.join(cPath, name)
      if (fs.statSync(p).isDirectory()) {
        modules[name] = p
      }
    })
  }

  return modules
}

exports.allBuild = (platType, filePath) => {
  return {
    [platType]: path.join(__dirname, filePath)
  }
}

// 是否需要压缩成/\.min.js/文件
exports.isMinify = process.argv.indexOf('-p') !== -1

exports.assetsPath = (_path) => {
  const assetsSubDirectory = 'static'

  return path.posix.join(assetsSubDirectory, _path)
}
