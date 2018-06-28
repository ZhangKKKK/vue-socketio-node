// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import vueSocket from 'vue-socket.io'//vue客户端

Vue.config.productionTip = false
Vue.use(vueSocket,'http://127.0.0.1:8888')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
