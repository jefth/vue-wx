import Vue from 'vue'
import Vuex from 'Vuex'
import product from './modules/product'
import address from './modules/address'
import order from './modules/order'
import createLogger from '../middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    product,
    address,
    order
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
