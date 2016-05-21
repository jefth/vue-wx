import {CREATE_ORDER, RECEIVE_ORDER, PAY_ORDER} from '../mutation-types'
const state = {
	order:{}
}
const mutations = {
  [RECEIVE_ORDER] (state, order) {
    state.order = order
  }
}

export default {
  state,
  mutations
}