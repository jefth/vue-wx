import {
  RECEIVE_ADDRESS
} from '../mutation-types'

// initial state
const state = {
  address: {}
}

// mutations
const mutations = {
  [RECEIVE_ADDRESS] (state, myAddress) {
    state.address = myAddress
  }
}

export default {
  state,
  mutations
}
