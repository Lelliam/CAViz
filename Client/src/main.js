// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import store from './vuex/store'
import 'view-design/dist/styles/iview.css';
// import axios from 'axios'


Vue.use(ViewUI);

Vue.config.productionTip = false;

// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
