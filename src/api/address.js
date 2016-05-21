let _address = {
  id:1,
  name:'伊利丹',
  phone:'13888888888',
  addressIds:["440000", "440100", "440106"],
  address1:'广东省 广州市 天河区',
  address2:'外域影月谷黑暗神庙'
}

export default {
  getAddress (cb) {
    setTimeout(() => cb(_address), 100)
  },
  saveAddress(cb,newAddress){  	
  	setTimeout(()=> {
  		cb(newAddress)
  		_address = newAddress
  	},100)
  }
}