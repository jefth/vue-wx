const _address = {
  id:1,
  name:'伊利丹',
  phone:'13888888888',
  address1:'外域影月谷',
  address2:'黑暗神庙'
}

export default {
  getAddress (cb) {
    setTimeout(() => cb(_address), 100)
  }
}