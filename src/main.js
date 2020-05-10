import Vue from 'vue'
import App from './App.vue'
import Hero from './Hero.vue'

Vue.component('hero',Hero);

new Vue({
  el: '#app',
  render: h => h(App)
})
