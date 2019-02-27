// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from 'js/store.js'


import 'css/reset.css'
import 'js/public.js'
import 'css/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
