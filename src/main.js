import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import routerConfig from './router'
import store from './vuex/store'
import App from './App'
const FastClick = require('fastclick')
FastClick.attach(document.body)

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)
sync(store, router)

// Resource
Vue.use(VueResource)

Vue.http.options.root = '/data/'
Vue.http.options.emulateJSON = true

// Directive
// Vue.directive('pullToRefresh', pullToRefresh)
// Vue.directive('infiniteScroll', infiniteScroll)

// Filters
// Vue.filter('date', filters.dateFilter)

router.start(App, '#app')

// just for debugging
window.router = router
