<template>
	<div>
		<div class="panel-bg">			
			<div class="weui_panel_bd">
		      <div class="media_box" >
		        <div class="media_hd" v-if="item.src">
		          <img class="media_appmsg_thumb" :src="item.src" alt="">
		        </div>
		        <div class="media_bd">
		          <div class="product_desc">{{item.title}}</div>
		          <div class="product_price">售价：{{price}}</div>
		          <div class="clearfix">
			        <x-number :min=1 :max=10 :value="count" :fillable=true @on-change="change"></x-number>
			      </div>
		        </div>
		      </div>
			</div>
		</div>
		<div class="panel-bg mt-10">
			<group>
		      <cell title="配送信息：请添加" is-link></cell>
		    </group>
		</div>
		<div class="panel-bg mt-10">
			<group>
		      <cell title="配送信息：" inline-desc="<p>一粒蛋 13888888888</p><p>外域影月谷黑暗神庙</p>" is-link></cell>
		    </group>
		</div>
		<div class="panel-bg mt-10">
			<div class="m-lr-15">留言</div>
			<x-textarea :max="200" placeholder="请填写详细信息"></x-textarea>
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
<style scoped>
	.product_desc{
		font-size: 14px;
		line-height: 19px;
		color: #333333;
	}
	.product_price{
		font-size: 12px;
		margin-top: 5px;
		margin-bottom: 10px;
		color: #b2b2b2;
	}
	.media_bd{
		/*height: 100px;*/
		-webkit-box-flex: 1;
    	box-flex: 1;
	}
	.media_hd{
		width: 100px;
		height: 100px;
		margin-right: 15px;
		line-height: 100px;
    	text-align: center;
	}
	.media_box{
		    display: box;
		    display: -webkit-box;
		    box-align: center;
		    -webkit-box-align: center;
		    box-pack: center;
		    -webkit-box-pack: center;
		padding: 10px 15px;
		position: relative;
	}
	.media_appmsg_thumb{
		width: 100%;
	    height: 100%;
	    vertical-align: middle;
	}
	.weui_textarea{
		background-color: #f7f7f7;
	}
</style>
<script>
	import {XButton, Sticky, XNumber, Cell, Group, XTextarea} from '../components/'
	export default{
		components:{
			XButton, 
			Sticky, 
			XNumber,
			Cell, 
			Group,
			XTextarea
		},
		ready(){},
		data(){
			return {
				item:{
					src:'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg',
					title:'微相集智能云存枯井城葫芦塔顶塔顶塔顶博大上海市'
				},
				count:1,
				price:600,
				addrees:'<p>一粒蛋 13888888888</p><p>外域影月谷黑暗神庙</p>'
			}
		},
		computed:{
			totalPrice:function(){
	          return this.count * this.price
	        }  
		},
		methods:{
			change: function (val) {
		      this.count=val;
		    },
		    goPay:function(){
		    	this.$route.router.go('/views/product-detail')
		    }		     
		}
	}
</script>