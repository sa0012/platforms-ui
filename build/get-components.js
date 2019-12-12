const fs = require('fs')
const path = require('path')

// 排除的文件
const EXCLUDES = ['index.ts', 'index.scss', 'style', 'mixins', 'utils', '.DS_Store']

module.exports = function () {
  // 拼接计算组件路径
  const src = path.resolve(__dirname, '../src')
  // 同步读取组件
  const dirs = fs.readdirSync(src)
  // 排除非组件文件
  return dirs.filter(dir => !EXCLUDES[dir])
}
