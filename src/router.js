export default function (router) {  
  router.map({
    //异步需加载
  '/': {
    component(resolve){
      require(['./views/product-detail'],resolve)
    }
  },
  '/buy/index.html':{
    component(resolve){
      require(['./views/product-detail'],resolve)
    }
  },
  '/buy':{
    component(resolve){
      require(['./views/product-detail'],resolve)
    }
  },
  '/views/product-detail':{
    component(resolve){
      require(['./views/product-detail'],resolve)
    }
  },
  '/views/order-confirm':{
    component(resolve){
      require(['./views/order-confirm'],resolve)
    }
  },
  '/views/address-manage':{
    component(resolve){
      require(['./views/address-manage'],resolve)
    }
  },
  '/views/pay-confirm':{
    component(resolve){
      require(['./views/pay-confirm'],resolve)
    }
  }

  // '/' : {
  //   component : require('./views/product-detail')
  // },
  // '/buy/index.html' : {
  //   component : require('./views/product-detail')
  // },
  // '/buy': {
  //   component : require('./views/product-detail')
  // },
  // '/views/product-detail' : {
  //   component : require('./views/product-detail')
  // },
  // '/views/order-confirm' : {
  //   component : require('./views/order-confirm')
  // },
  // '/views/address-manage' : {
  //   component : require('./views/address-manage') 
  // }
  
})

// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.fullPath)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})
}