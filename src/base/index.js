import ref from 'vue-ref'

const base = {}
export const Directive = {
  install: Vue => {
    Vue.use(ref, { name: 'ant-ref' })
  }
}

const install = function (Vue) {
  base.Vue = Vue
  Vue.use(Directive)
}
base.install = install

export default base
