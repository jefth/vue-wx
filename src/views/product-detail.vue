<template>
  <div>
    <div class="panel-bg">
      <swiper :list="imgList" height="210px" ></swiper>
      <group-title class="product-title">{{product.title}}</group-title>
      <div class="product-info m-lr-15">
        {{product.description}}
      </div>
      <group-title class="product-price">&yen {{price}}</group-title>
      <group-title class="product-cell">选择分类</group-title>
      <div class="m-lr-15">
        <span :class="{'product-categray':true,'on':checkedType===item.typeId}" v-for="item in product.types" @click="chooseType(item.typeId)">{{item.title}}</span>
      </div>
      <group-title class="product-cell">购买数量</group-title>
      <div class="m-lr-15 pd-b-15 clearfix">
        <x-number :min=1 :max=10 :value=1 :fillable=true @on-change="chooseNumber"></x-number>
      </div>
    </div>
    <div class="panel-bg mt-10">
      <group-title class="product-cell">产品介绍</group-title>
      <div class="m-lr-15">
        {{product.detailInfo}}
      </div>        
    </div>
    <sticky class="ui-box" direction="bottom">
        <div class="ui-price">
          <span>共{{count}}件 总计：</span><strong class="total-price">{{totalPrice}}</strong><span>元</span>
        </div>
        <div class="ui-btn">
          <x-button type="primary" class="no-border-radius" @click="goPay">立即购买</x-button>
        </div>
      </sticky> 
  </div>
</template>

<script>
import { Swiper, GroupTitle, XButton, Sticky, XNumber } from '../components/'
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
      product: ({product}) => product.product,
      count: ({ product }) => product.count,
      checkedType:({product}) => product.checkedType,
      price: ({product})   => product.product.types.find(type=>type.typeId===product.checkedType).price
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
          return this.count * this.price
        } ,
        imgList:function(){
          let index = this.checkedType;
          return this.product.types.find(type=>type.typeId===index).imgs
        }   
      }
}
</script>
<style>
  @import '../assets/css/base.css'
</style>
<style scoped>
.product-categray{
    font-size: 12px;
    line-height: 12px;
    color: #b3b3b3;
    display: inline-block;
    border: 1px solid #b3b3b3;
    overflow: hidden;
    text-align: center;
    padding: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.on{
  color: #22bb5e;
  border-color: #22bb5e;
}
.product-title{
  font-size:18px;
  color:#333;
  line-height:18px;
}
.product-info{
  font-size:12px;
  color:#b2b2b2;
}
.product-price{
  font-family:Arial;
  font-size:18px;
  color:#22bb5e;
  line-height:18px;
}
.product-cell{
  margin-top:15px;
  font-size:12px;
  color:#b2b2b2;
}
</style>
