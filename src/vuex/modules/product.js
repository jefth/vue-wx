import {
  CHOOSE_TYPE,
  CHOOSE_NUMBER,
  RECEIVE_PRODUCTS
} from '../mutation-types'

// initial state
const state = {
  product: {},
  count:1,
  checkedType:1
}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.product = products
  },

  [CHOOSE_TYPE] (state, typeId) {
    state.checkedType = typeId
  },
  [CHOOSE_NUMBER](state,number){
    state.count=number
  }
}

export default {
  state,
  mutations
}
