// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/color-brewer.css'
import './assets/styles/index.scss'
import icon from './icon.config'

import plarforms from '../src'
import '../src/style.js'
import BCollapseTransition from './components/collapse-transition'

import DemoBlock from './components/demo-block.vue'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
import SideNav from './components/side-nav.vue'
// import PlAlert from '../es/Alert'
Vue.component('DemoBlock', DemoBlock)
Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideNav', SideNav)
Vue.component('BCollapseTransition', BCollapseTransition)
// // Vue.component('PlAlert', PlAlert)

Vue.use(plarforms)

Vue.prototype.$icon = icon // Icon 列表页用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
