<template>
	<div>
		<div class="panel-bg">			
			<div class="weui_panel_bd">
		      <div class="media_box" >
		        <div class="media_hd" v-if="imgList.img">
		          <img class="media_appmsg_thumb" :src="imgList.img" alt="">
		        </div>
		        <div class="media_bd">
		          <div class="product_desc">{{product.title}}</div>
		          <div class="product_price">售价：{{price}}</div>
		          <div class="clearfix">
			        <x-number :min=1 :max=10 :value="count" :fillable=true @on-change="chooseNumber"></x-number>
			      </div>
		        </div>
		      </div>
			</div>
		</div>
		<div class="panel-bg mt-10">
			<group v-if="!!!addressName" :component-style="cellStyle">
		      <cell title="配送信息：请添加" is-link v-link="'./address-manage'"></cell>
		    </group>
		    <group v-if="!!addressName" :component-style="cellStyle">
		      <cell title="配送信息：" :inline-desc="addressName" is-link></cell>
		    </group>
		</div>
		<div class="panel-bg mt-10">
			
		</div>
		<div class="panel-bg mt-10">
			<div class="m-lr-15">留言</div>
			<x-textarea :max="200" :textarea-style="textareaStyle" placeholder="请填写详细信息"></x-textarea>
		</div>
		<sticky class="ui-box" direction="bottom">
        <div class="ui-price">
          <span>共{{count}}件 总计：</span><strong class="total-price">{{totalPrice}}</strong><span>元</span>
        </div>
        <div class="ui-btn">
          <x-button type="primary" class="no-border-radius" @click="goPay">去结算</x-button>
        </div>
      </sticky>
	</div>
</template>
<style  scoped>
	.product_desc{
		font-size: .875rem;
		line-height: 1.1875rem;
		color: #333333;
	}
	.product_price{
		font-size: .75rem;
		margin-top: .3125rem;
		margin-bottom: .625rem;
		color: #b2b2b2;
	}
	.media_bd{
		-webkit-box-flex: 1;
    	box-flex: 1;
	}
	.media_hd{
		width: 6.25rem;
		height: 6.25rem;
		margin-right: .9375rem;
		line-height: 6.25rem;
    	text-align: center;
	}
	.media_box{
		    display: box;
		    display: -webkit-box;
		    box-align: center;
		    -webkit-box-align: center;
		    box-pack: center;
		    -webkit-box-pack: center;
		padding: .625rem .9375rem;
		position: relative;
	}
	.media_appmsg_thumb{
		width: 100%;
	    height: 100%;
	    vertical-align: middle;
	}
</style>
<script>
	import {XButton, Sticky, XNumber, Cell, Group, XTextarea} from '../components/'
	import {chooseNumber, getMyAddress} from '../vuex/actions'
	export default{
		components:{
			XButton, 
			Sticky, 
			XNumber,
			Cell, 
			Group,
			XTextarea
		},
		ready(){
			// this.getMyAddress()
		},
		data(){
			return{
				cellStyle:{
					marginTop:0
				},
				textareaStyle:{
					backgroundColor: '#f7f7f7',
					height:'200px'
				}
			}
		},
		vuex:{
			getters: {
		      product: ({product}) => product.product,
		      count: ({ product }) => product.count,
		      price: ({product})   => product.product.types.find(type=>type.typeId===product.checkedType).price,
		      checkedType:({product}) => product.checkedType,
		      address:({address})  => address.address
		    },
		    actions: {
		      getMyAddress,
		      chooseNumber,
		    }
		},		
		computed:{
			totalPrice:function(){
	          return this.count * this.price
	        },
	        imgList:function(){
	          let index = this.checkedType;	         
	          return this.product.types.find(type=>type.typeId===index).imgs[0]
	        },
	        addressName:function(){		
	        	return this.address.name&&('<p>'+this.address.name +this.address.phone+'</p><p>'+this.address.address1+this.address.address2+'</p>')
	        }
		},
		methods:{			
		    goPay:function(){
		    	this.$route.router.go('/views/product-detail')
		    }		     
		}
	}
</script>