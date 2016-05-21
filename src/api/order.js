const _order={
	orderId:67584965656718,
	title:'微相集智能云存储',
	typeName:'1T樱花粉',
	count:2,
	payDate:'2016-6-13 15:23:12',
	orderTotal:'599'
}
export default{
	pay(cb){
		cb()
	},
	createOrder(cb){
		cb()
	},
	getOrder(cb){
		cb(_order)
	}
}