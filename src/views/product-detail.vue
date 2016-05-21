<template>
  <div>
    <div class="panel-bg">
      <swiper :list="imgList" height="13.125rem" ></swiper>
      <group-title class="product-title">{{product.Title}}</group-title>
      <div class="product-info m-lr-15">
        {{product.Description}}
      </div>
      <group-title class="product-price">&yen {{Price}}</group-title>
      <group-title class="product-cell">选择分类</group-title>
      <div class="m-lr-15">
        <span :class="{'product-categray':true,'on':checkedType===item.TypeId}" v-for="item in product.Types" @click="chooseType(item.TypeId)">{{item.Title}}</span>
      </div>
      <group-title class="product-cell">购买数量</group-title>
      <div class="m-lr-15 pd-b-15 clearfix">
        <x-number :min=1 :max=10 :value=Count :fillable=true @on-change="chooseNumber"></x-number>
      </div>
    </div>
    <div class="panel-bg mt-10">
      <group-title class="product-cell" :style="{marginTop:'.625rem'}">产品介绍</group-title>
      <div class="m-lr-15">
        {{product.DetailInfo}}
      </div>        
    </div>
    <sticky class="ui-box" direction="bottom">
        <div class="ui-price">
          <span>共{{Count}}件 总计：</span><strong class="total-price">{{totalPrice}}</strong><span>元</span>
        </div>
        <div class="ui-btn">
          <x-button type="primary" class="no-border-radius" @click="goPay">立即购买</x-button>
        </div>
      </sticky> 
  </div>
</template>

<script>
// import { Swiper, GroupTitle, XButton, Sticky, XNumber } from '../components/'
import Style from '../components/Style' 
import Swiper from '../components/swiper'
import GroupTitle from '../components/group-title'
import XButton from '../components/x-button'
import Sticky from '../components/sticky'
import XNumber from '../components/x-number'
import { getAllProducts, chooseNumber, chooseType } from '../vuex/actions'

export default {
  components: {
    Swiper,
    GroupTitle,
    XButton,
    Sticky,
    XNumber
  },
  ready(){
    
  },
  created () {
    this.getAllProducts()
  },
  vuex: {
    getters: {
      product: ({product})    => product.product,
      Count: ({ product })    => product.count,
      checkedType:({product}) => product.checkedType,
      Price: ({product})      => product.product.Types.find(type=>type.TypeId===product.checkedType).Price
    },
    actions: {
      getAllProducts,
      chooseNumber,
      chooseType
    }
  },
  methods: {
    goPay: function(){
      this.$route.router.go('/views/order-confirm')
    }
  },
  computed: {
        totalPrice:function(){
          console.log(this.count,this.Price)
          return this.Count * this.Price
        } ,
        imgList:function(){
          let index = this.checkedType;
          return this.product.Types.find(type=>type.TypeId===index).Imgs
        }   
      }
}
</script>
<style>
  @import '../assets/css/base.css'
</style>
<style scoped>
.product-categray{
    font-size: .75rem;
    line-height: .75rem;
    color: #b3b3b3;
    display: inline-block;
    border: 1px solid #b3b3b3;
    overflow: hidden;
    text-align: center;
    padding: .9375rem;
    margin-right: .625rem;
    margin-bottom: .625rem;
}
.on{
  color: #22bb5e;
  border-color: #22bb5e;
}
.product-title{
  font-size:1.125rem;
  color:#333;
  line-height:1.125rem;
}
.product-info{
  font-size:.75rem;
  color:#b2b2b2;
}
.product-price{
  font-family:Arial;
  font-size:1.125rem;
  color:#22bb5e;
  line-height:1.125rem;
}
.product-cell{
  margin-top:.9375rem;
  font-size:.75rem;
  color:#b2b2b2;
}
</style>
