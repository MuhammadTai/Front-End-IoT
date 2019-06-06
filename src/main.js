import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router' // Router being imported
import Grafana from './grafana.vue'
import start from './routerview.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
const  routes = [
  {path: '/grafana', component: Grafana},
  {path: '/', component: App}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(start)
})
