import deepmerge from 'deepmerge'

export const filterConfigType = (name) => {
  switch (name) {
    case 'color':
    case 'typography':
    case 'border':
      return 'global'
    default:
      return 'local'
  }
}

export const filterGlobalValue = (defaultConfig, userConfig) => {
  const valueObject = {}
  const globalArr = ['color', 'typography', 'border']
  globalArr.forEach((global) => {
    const configObj = {}
    defaultConfig
      .find(config => (config.name === global))
      .config.forEach(c => (configObj[c.key] = deepmerge({}, c)))
    valueObject[global] = configObj
    Object.keys(configObj).forEach((c) => {
      if (userConfig.global[c]) {
        configObj[c].value = userConfig.global[c]
      }
    })
  })
  return valueObject
}

export const getStyleDisplayValue = (displayValue, global) => {
  if (displayValue.startsWith('$')) {
    return global[displayValue].value
  }
  return displayValue
}
