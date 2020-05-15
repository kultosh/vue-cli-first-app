import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// Router
Vue.use(VueRouter);

// Axios
window.axios = require('axios');

//-------------------------------
const router = new VueRouter({
  routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
