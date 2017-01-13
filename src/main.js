// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'Vuex'
import store from './store/store'

Vue.use(Vuex)


Date.prototype.setTimeD = function (time) {
  this.setTime(time)
  return this
}

new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  template: '<App/>',
  components: { App }
})
