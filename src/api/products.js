import {ProductResource} from './resource'
const _products = {
  id:1,
  title:'微相集智能云存储',
  description:'您的家庭智能相集,智能备份整理,自动上传',
  detailInfo:' 产品详细介绍产品详细介绍产品详细介绍，产品详细介绍产品详细介绍产品详细介绍产品详细介绍，产品详细介绍产品详细介绍产品详细介绍产品详细介绍产品详细介绍',
  types:[{
    typeId:1,
    price:599,
    title:'500G机械硬盘',
    imgs:[{
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
    }]
  },{
    typeId:2,
    price:799,
    title:'500G黑色机械硬盘',
    imgs:[{
      img: 'http://www.cume.cc/website/images/photoComb/container-2-1.png'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
    }]
  },{
    typeId:3,
    price:899,
    title:'1T粉色SSD',
    imgs:[{
      img: 'http://www.cume.cc/website/images/photoComb/container-1-1.png'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
    }]
  },{
    typeId:4,
    price:999,
    title:'1T骚绿色SSD',
    imgs:[{
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg'
    }, {
      img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg'
    }]
  }]  
}

export default {
  getProducts (data) {
    return ProductResource.get({id:'getType'},data)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}