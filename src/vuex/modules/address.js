import {
  RECEIVE_ADDRESS,
  SAVE_ADDRESS
} from '../mutation-types'

// initial state
const state = {
  address: {}
}

// mutations
const mutations = {
  [RECEIVE_ADDRESS] (state, myAddress) {
    state.address = myAddress
  },
  [SAVE_ADDRESS](state,address){
  	state.address = address
  }
}

export default {
  state,
  mutations
}
