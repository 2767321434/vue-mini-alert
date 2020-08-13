
import Vue from 'vue'
import App from './App.vue'
import VueMiniAlert from '../dist/vue-mini-alert.min';

Vue.use(VueMiniAlert);
new Vue({
  el: '#app',
  render: h => h(App)
})
