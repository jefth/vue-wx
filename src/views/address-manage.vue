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
				<x-input title="真实姓名：" placeholder="请输入姓名" is-type="china-name" :max="10"></x-input>
				<x-input title="手机号码：" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :max="11"></x-input>
				<address title="所在地区：&nbsp;&nbsp;&nbsp;" :value.sync="value" :list="addressData"></address>
				<x-input title="街道地址：" placeholder="详细地址" :max="25"></x-input>
			</group>
		</div>
		<div class="m-lr-15 mt-20">
			<x-button type="primary" class="mb-15">保存</x-button>
			<x-button type="default">取消</x-button>
		</div>
	</div>
</template>
<script>
	import {XButton, XInput, Cell, Group, Address, AddressChinaData,} from '../components/'
	export default{
		components:{
			XButton, 
			XInput,
			Cell, 
			Group,
			Address
		},
		data(){
			return{
				cellStyle:{
					marginTop:0
				},
				value:[],
				addressData:AddressChinaData
			}
		}
	}
</script>
<style scope>
	.address-font{
		font-size: .75rem
	}
	.weui_cells{
		font-size: inherit !important;
	}
</style>