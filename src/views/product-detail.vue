<template>
  <div>
    <swiper :list="list" height="210px"></swiper>
    <group-title style="font-size:18px;color:#333;line-height:18px;">微相集智能云存储</group-title>
    <div style="margin:0 15px;font-size:12px;color:#b2b2b2;">
      {{info}}
    </div>
    <group-title style="font-family:Arial;font-size:18px;color:#22bb5e;line-height:18px;">&yen 599</group-title>
    <group-title style="margin-top:15px;font-size:12px;color:#b2b2b2;">选择分类</group-title>
    <div style="margin:0 15px;">
 
    </div>
    <sticky class="ui-box">
      <div class="price">
        <span>共1件 总计：</span><strong>899</strong><span>元</span>
      </div>
      <div class="btn">
        <a class="ui-button" href="/1/#/order/checkout?address_type=common">
          <span>去结算</span>
        </a>
      </div>
    </sticky>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Sticky } from '../components/'

const demoList =
[{
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg'
}, {
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
}, {
  img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
}]

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Sticky
  },
  ready () {    
  },
  methods: {
    setData: function () {
      this.list1 = demoList
      this.disableLoadData = true
    }
  },
  data: function () {
    return {
      list: demoList,
      list1: [],
      disableLoadData: false,
      imgList: [],
      info:'您的家庭智能相集,智能备份整理,自动上传'
    }
  }
}
</script>

<style scoped>
.ui-box{
  display: box;
  display: -webkit-box;
  box-align: center;
  -webkit-box-align: center;
  box-pack: center;
  -webkit-box-pack: center;
  border-top: 1px solid #f6f6f6;
  background: #FFF;
}
.price{
    font-size: .26rem;
    color: #999;
    -webkit-box-flex: 1;
    box-flex: 1;
    width: 140%;
    text-align: center;
}
.btn{
    -webkit-box-flex: 1;
    box-flex: 1;
    width: 100%;
}
.ui-button{
      display: block;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    -ms-border-radius: .1rem;
    -o-border-radius: .1rem;
    border-radius: .1rem;
    background-color: #22bb5e;
    text-align: center;
    height: 54px;
    line-height: 54px;
}
.ui-button span{
  color: #fff;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.swiper-img img {
  width: 100%;
  display: block;
}
</style>
