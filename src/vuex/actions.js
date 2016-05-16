import shop from '../api/products'
import address from '../api/address'
import * as types from './mutation-types'

export const chooseNumber = ({ dispatch }, number) => {
    dispatch(types.CHOOSE_NUMBER, number)
}

export const chooseType = ({ dispatch }, typeId) => {
    dispatch(types.CHOOSE_TYPE, typeId)
}

export const getAllProducts = ({ dispatch }) => {
  shop.getProducts(products => {
    dispatch(types.RECEIVE_PRODUCTS, products)
  })
}

export const getMyAddress = ({dispatch}) => {
  address.getAddress(myAddress=>{
    dispatch(types.RECEIVE_ADDRESS,myAddress)
  })
}
