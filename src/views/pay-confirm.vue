<template>
	<div>
		<div class="panel-bg pd-lr-15">
			<div class="pay-cell">
				收款方：广州市炒米信息科技有限公司
			</div>
			<div class="mt-10 pay-cell">
				商品：{{title}} X{{count}}件
			</div>
			<div class="mt-10 pay-cell">
				交易单号：{{orderNumber}}
			</div>
			<div class="mt-10 pay-cell">
				交易时间：{{payDate}}
			</div>
			<div class="wx-logo">
				<img src="../assets/img/wechat_pay.png" alt="">
			</div>
			<div class="pay-big center">
				微信支付 <span class="total-price">{{orderTotal}}元</span>
			</div>
			<div class="mt-10 pay-cell center pd-b-15">
				本次支付安全由微信担保
			</div>
		</div>
		<div class="m-lr-15 mt-20">
			<x-button type="primary" class="mb-15" @click="pay">确定</x-button>
			<x-button type="default" @click="cancel">取消</x-button>
		</div>
	</div>
</template>
<script>
	import XButton from '../components/x-button'
	import {getOrder} from '../vuex/actions'
	export default{
		components:{
			XButton
		},
		ready(){
			this.getOrder()
		},
		vuex:{
			getters:{
				title:({order}) => order.order.title,
				count:({order}) => order.order.count,
				orderNumber:({order}) => order.order.orderId,
				payDate:({order}) => order.order.payDate,
				orderTotal:({order}) => order.order.orderTotal,
			},
			actions:{
				getOrder
			}
		},
		methods:{
			pay:function(){

			},
			cancel:function(){

			}
		}
	}
</script>
<style scoped>
	.wx-logo{
		margin-top: 2.1875rem;
		margin-bottom: 1.40625rem;
		text-align: center;
	}
	.pay-cell{
		font-size:.75rem;
  		color:#b2b2b2;
	}
	.center{
		text-align: center;
	}
	.pay-big{
		font-size: 1.25rem;
	}
	.total-price{ 
	  color:#22bb5e;
	  font-width: bold;
	}
</style>