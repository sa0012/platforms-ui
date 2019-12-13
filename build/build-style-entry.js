/**
 * 样式文件
 */
const fs = require('fs-extra')
const path = require('path')

// 引入组件库文件
const Components = require('./get-components')()

// style 文件路径
const filePath = path.join(__dirname, '../src/style.js')

function buildStyleEntry () {
  const importList = Components.map(name => `import './${name}/style'`)
  const content = `${importList.join('\n')}${'\n'}`
  fs.writeFileSync(filePath, content)
}

buildStyleEntry()
