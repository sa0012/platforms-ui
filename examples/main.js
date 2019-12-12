// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/color-brewer.css'
import './assets/styles/index.scss'
import icon from './icon.config'

import BinUI from '../src/index'
// import '../src/styles/index.scss'
import BCollapseTransition from './components/collapse-transition'

import DemoBlock from './components/demo-block.vue'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
import SideNav from './components/side-nav.vue'

Vue.use(BinUI)

Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideNav', SideNav)
Vue.component('BCollapseTransition', BCollapseTransition)

Vue.prototype.$icon = icon // Icon 列表页用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
