import Vue from 'vue'
import Vuex from 'Vuex'
import product from './modules/product'
import address from './modules/address'
import createLogger from '../middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    product,
    address
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
