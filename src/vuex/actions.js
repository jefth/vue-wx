import api from '../api/products'
import address,{_address as userAddress} from '../api/address'
import order from '../api/order'
import * as types from './mutation-types'

export const chooseNumber = ({ dispatch }, number) => {
    dispatch(types.CHOOSE_NUMBER, number)
}

export const chooseType = ({ dispatch }, typeId) => {
    dispatch(types.CHOOSE_TYPE, typeId)
}

export const getAllProducts = ({ dispatch }) => {
	api.getProducts({ProductNumber:'2345TGRET74'}).then(response => {
    if(!response.status===0){
      //不成功todo      
    }
    let data = response.data.data,viewData={},imgList=[],productTypes=[];    
    data.forEach(function(item){
    	imgList=[];
    	item.Imgs.split(',').forEach(function(src){
	    	imgList.push({img:src})
	    })
    	productTypes.push({
    		CreateDate: item.CreateDate,
			Imgs: [...imgList],
			Price: item.Price,
			Title: item.Title,
			TypeId: item.id
    	})
    })
    viewData = data[0].dt_product
    viewData.Types = productTypes;
    console.log(productTypes)
    dispatch(types.RECEIVE_PRODUCTS, viewData)
  }, response => {
    dispatch(types.RECEIVE_PRODUCTS, response.data)
  })
}

export const getMyAddress = ({dispatch}) => {
  address.getAddress(myAddress=>{
    dispatch(types.RECEIVE_ADDRESS,myAddress)
  })
}

export const saveAddress = (store,newAddress,path) => {	
	address.saveAddress(n=>{
		store.dispatch(types.SAVE_ADDRESS,n)
		store.router.go(path)
	},newAddress)
}

export const createOrder = (store,path) =>{
	order.createOrder(order => {
		store.dispatch(types.CREATE_ORDER,order)
		store.router.go(path)
	})
}

export const getOrder = ({dispatch}) =>{
	order.getOrder(order => {
		dispatch(types.RECEIVE_ORDER,order)
	})
}
