import Alert from './Alert'
import Confirm from './confirm'

const components = [
  Alert,
  Confirm
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Alert,
  Confirm
}
