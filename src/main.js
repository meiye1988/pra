// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App'
import toast from './pulgin/toast.js'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './static/css/common.css'
import './static/css/toast.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
