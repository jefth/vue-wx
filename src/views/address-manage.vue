<template>
	<div>
		<div class="panel-bg">
			<group :component-style="cellStyle">
				<cell title="address" is-link v-link="'#'">
			       <span class="vue-wx-icon" slot="icon">&#xe61b;</span>
			    </cell>
			</group>
		</div>
		<div class="panel-bg mt-10">
			<group>
				<x-input title="真实姓名：" placeholder="请输入姓名" is-type="china-name"></x-input>
				<x-input title="手机号码：" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
				<x-input title="所在地区：" placeholder="省 市 区" :max="20"></x-input>
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
	import {XButton, XInput, Cell, Group} from '../components/'
	export default{
		components:{
			XButton, 
			XInput,
			Cell, 
			Group
		},
		data(){
			return{
				cellStyle:{
					marginTop:0
				}
			}
		}
	}
</script>
<style>
	
</style>