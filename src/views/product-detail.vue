<template>
  <div>
    <div class="panel-bg">
      <swiper :list="list" height="210px" ></swiper>
      <group-title class="product-title">微相集智能云存储</group-title>
      <div class="product-info m-lr-15">
        {{info}}
      </div>
      <group-title class="product-price">&yen {{price}}</group-title>
      <group-title class="product-cell">选择分类</group-title>
      <div class="m-lr-15">
        <span :class="{'product-categray':true,'on':index===active}" v-for="(index,item) in categorylist" @click="active=index">{{item.txt}}</span>
      </div>
      <group-title class="product-cell">购买数量</group-title>
      <div class="m-lr-15 pd-b-15 clearfix">
        <x-number :min=1 :max=10 :value=1 :fillable=true @on-change="change"></x-number>
      </div>
    </div>
    <div class="panel-bg mt-10">
      <group-title class="product-cell">产品介绍</group-title>
      <div class="m-lr-15">
        微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储
        微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储
        微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储
        微相集智能云存储微相集智能云存储微相集智能云存储
        微相集智能云存储微相集智能云存储微相集智能云存储微相集智能云存储
        微相集智能云存储微相集智能云存储微相集智能云存储
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

const demoList =
[{
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg'
}, {
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
}, {
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
}]
const categorylist =
[{
  id:1,
  txt:'500G黑色机械硬盘',
  price:599
},
{
  id:2,
  txt:'机械硬盘',
  price:300
},
{
  id:3,
  txt:'500G硬盘',
  price:466
},
{
  id:4,
  txt:'黑色硬盘',
  price:399
},
{
  id:5,
  txt:'500G硬盘',
  price:600
}]

export default {
  components: {
    Swiper,
    GroupTitle,
    XButton,
    Sticky,
    XNumber
  },
  ready () {    
  },
  methods: {
    goPay: function(){
      this.$route.router.go('/views/order-confirm')
    },
    change: function (val) {
      this.count=val;
    }
  },
  data: () => ({
      list: demoList,
      categorylist: categorylist,
      disableLoadData: false,
      imgList: [],
      info:'您的家庭智能相集,智能备份整理,自动上传',
      count:1,
      active:0 
  }),
  computed: {
        totalPrice:function(){
          return this.count * this.price
        },
        price:function(){
          return this.categorylist[this.active].price
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
