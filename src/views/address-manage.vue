<template>
	<div>
		<div class="panel-bg address-font" >
			<group :component-style="cellStyle">
				<cell title="address" is-link v-link="'#'">
			       <span class="vue-wx-icon" slot="icon">&#xe61b;</span>
			    </cell>
			</group>
		</div>
		<div class="panel-bg mt-10 address-font" >
			<group>
				<x-input title="真实姓名：" placeholder="请输入姓名" is-type="china-name" :max="10" :value.sync="name"></x-input>
				<x-input title="手机号码：" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :max="11" :value.sync="phone"></x-input>
				<address title="所在地区：&nbsp;&nbsp;&nbsp;" :value.sync="addressIds" :list="addressData"></address>
				<x-input title="街道地址：" placeholder="详细地址" :max="25" :value.sync="address2"></x-input>
			</group>
		</div>
		<div class="m-lr-15 mt-20">
			<x-button type="primary" class="mb-15" @click="updateAddress">保存</x-button>
			<x-button type="default" @click="cancel">取消</x-button>
		</div>
	</div>
</template>
<script>
	// import {XButton, XInput, Cell, Group, Address, AddressChinaData,} from '../components/'
	import Cell from '../components/cell'
	import XInput from '../components/x-input'
	import Group from '../components/group'
	import XButton from '../components/x-button'
	import Sticky from '../components/sticky'
	import XNumber from '../components/x-number'
	import Address from '../components/address'
	import AddressChinaData from '../components/address/list.json'
	import {saveAddress} from '../vuex/actions'
	import value2name from '../filters/value2name'
	export default{
		components:{
			XButton, 
			XInput,
			Cell, 
			Group,
			Address
		},
		vuex:{
			getters: {
		      address:({address})  => address.address
		    },
		    actions:{
		    	saveAddress
		    }
		},
		data(){
			return{
				cellStyle:{
					marginTop : 0
				},
				addressData : AddressChinaData,
				name : this.address.name,
				phone : this.address.phone,
				addressIds : [...this.address.addressIds],
				address2 : this.address.address2
			}
		},
		methods:{
			updateAddress:function(){				
				let address1 = value2name(this.addressIds,this.addressData)
				let _this = this
				this.saveAddress(
					{name:_this.name,phone:_this.phone,addressIds:_this.addressIds,address1:address1,address2:_this.address2},
					'/views/order-confirm'
				)
			},
			cancel:function(){
				window.history.back()
			}
		}
	}
</script>
<style scoped>
	.address-font{
		font-size: .75rem
	}
	.weui_cells{
		font-size: inherit !important;
	}
</style>