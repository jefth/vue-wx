import Wechat from './Wechat'
import Home from './Home'
import Yi from './yi'
import Icon from './demos/Icon'
import Switch from './demos/Switch'
import Radio from './demos/Radio'
import Input from './demos/Input'
import Number from './demos/Number'
import Checklist from './demos/Checklist'
import Selector from './demos/Selector'
import Tip from './demos/Tip'
import Button from './demos/Button'
import Textarea from './demos/Textarea'
import Flexbox from './demos/Flexbox'
import Tab from './demos/Tab'
import Swiper from './demos/Swiper'
import Sticky from './demos/Sticky'
import Picker from './demos/Picker'
import Datetime from './demos/Datetime'
import Popup from './demos/Popup'
import Range from './demos/Range'
import Actionsheet from './demos/Actionsheet'
import Clocker from './demos/Clocker'
import Rater from './demos/Rater'
import PopupPicker from './demos/Popup-picker'
import Address from './demos/Address'
import Toast from './demos/Toast'
import Loading from './demos/Loading'
import Alert from './demos/Alert'
import Confirm from './demos/Confirm'
import Progress from './demos/Progress'
import XImg from './demos/XImg'
import Onepx from './demos/1px'
import Orientation from './demos/Orientation'
import Shake from './demos/Shake'
import Cell from './demos/Cell'
import Demo from './demos/Demo'
import Emotion from './demos/Wechat-emotion'
import Search from './demos/Search'
import Donate from './demos/Donate'
import Thanks from './demos/Thanks'
import Spinner from './demos/Spinner'
import Calendar from './demos/Calendar'
import Circle from './demos/Circle'
import Countup from './demos/Countup'
import ColorPicker from './demos/Color-picker'
import Blur from './demos/Blur'
import Scroller from './demos/Scroller'
import Comment from './demos/Comment'
import Pulldown from './demos/Pulldown'
import Pullup from './demos/Pullup'
import Masker from './demos/Masker'
import Countdown from './demos/Countdown'
import XHeader from './demos/X-header'
import Inview from './demos/Inview'
import InlineCalendar from './demos/Inline-calendar'
import Checker from './demos/Checker'
import ScrollerFull from './demos/Scroller-full'
import NumberRoller from './demos/Number-roller'
import Timeline from './demos/Timeline'
import Tabbar from './demos/Tabbar'
import Panel from './demos/Panel'
import Reddot from './demos/Reddot'
import ButtonTab from './demos/Button-tab'
import ScrollerSwiper from './demos/Scroller-swiper'
import Qrcode from './demos/Qrcode'

import ProductDetail from './views/product-detail'
import OrderConfirm  from './views/order-confirm'
import AddressManage  from './views/address-manage'

export default function (router) {
  // router.map({
  //   '*': {
  //     component (resolve) {
  //       require(['./views/welcome'], resolve)
  //     }
  //   },
  //   '/': {
  //     component (resolve) {
  //       require(['./views/welcome'], resolve)
  //     }
  //   },
  //   '/home': {
  //     component (resolve) {
  //       require(['./views/home'], resolve)
  //     }
  //   },
  //   '/list': {
  //     component (resolve) {
  //       require(['./views/list'], resolve)
  //     }
  //   },
  //   '/rank': {
  //     component (resolve) {
  //       require(['./views/rank'], resolve)
  //     }
  //   },
  //   '/invite': {
  //     component (resolve) {
  //       require(['./views/invite'], resolve)
  //     }
  //   },
  //   '/tasks': {
  //     component (resolve) {
  //       require(['./views/tasks'], resolve)
  //     }
  //   },
  //   '/user': {
  //     component (resolve) {
  //       require(['./views/user'], resolve)
  //     }
  //   },
  //   '/user/tasks': {
  //     component (resolve) {
  //       require(['./views/user/tasks'], resolve)
  //     }
  //   },
  //   '/user/withdraw': {
  //     component (resolve) {
  //       require(['./views/user/withdraw'], resolve)
  //     }
  //   },
  //   '/user/profile': {
  //     component (resolve) {
  //       require(['./views/user/profile'], resolve)
  //     }
  //   },
  //   '/user/profit': {
  //     component (resolve) {
  //       require(['./views/user/profit'], resolve)
  //     }
  //   },
  //   '/user/profit/record': {
  //     component (resolve) {
  //       require(['./views/user/profitRecord'], resolve)
  //     }
  //   },
  //   '/more': {
  //     component (resolve) {
  //       require(['./views/more'], resolve)
  //     }
  //   },
  //   '/more/feedback': {
  //     component (resolve) {
  //       require(['./views/more/feedback'], resolve)
  //     }
  //   },
  //   '/more/about': {
  //     component (resolve) {
  //       require(['./views/more/about'], resolve)
  //     }
  //   }
  // })

  // router.beforeEach(({to, from, next}) => {
  //   let toPath = to.path
  //   let fromPath = from.path
  //   console.log('to: ' + toPath + ' from: ' + fromPath)
  //   if (toPath.replace(/[^/]/g, '').length > 1) {
  //     router.app.isIndex = false
  //   }
  //   else {
  //     let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
  //     router.app.isIndex = depath ? 0 : 1
  //   }
  //   next()
  // })

  // router.afterEach(function ({to}) {
  //   console.log(`成功浏览到: ${to.path}`)
  // })
  
  router.map({
  '/': {
    component: Home
  },
  '/views/product-detail':{
    component: ProductDetail
  },
  '/views/order-confirm':{
    component: OrderConfirm
  },
  '/views/address-manage':{
    name:"addressManage",
    component:AddressManage
  },
  '/demo/wechat': {
    component: Wechat
  },
  '/demo/yi': {
    component: Yi
  },
  '/component/icon': {
    component: Icon
  },
  '/component/switch': {
    component: Switch
  },
  '/component/radio': {
    component: Radio
  },
  '/component/input': {
    component: Input
  },
  '/component/number': {
    component: Number
  },
  '/component/checklist': {
    component: Checklist
  },
  '/component/selector': {
    component: Selector
  },
  '/component/tip': {
    component: Tip
  },
  '/component/button': {
    component: Button
  },
  '/component/textarea': {
    component: Textarea
  },
  '/component/flexbox': {
    component: Flexbox
  },
  '/component/tab': {
    component: Tab
  },
  '/component/swiper': {
    component: Swiper
  },
  '/component/sticky': {
    component: Sticky
  },
  '/component/picker': {
    component: Picker
  },
  '/component/datetime': {
    component: Datetime
  },
  '/component/popup': {
    component: Popup
  },
  '/component/range': {
    component: Range
  },
  '/component/actionsheet': {
    component: Actionsheet
  },
  '/component/clocker': {
    component: Clocker
  },
  '/component/rater': {
    component: Rater
  },
  '/component/popup-picker': {
    component: PopupPicker
  },
  '/component/address': {
    component: Address
  },
  '/component/toast': {
    component: Toast
  },
  '/component/loading': {
    component: Loading
  },
  '/component/alert': {
    component: Alert
  },
  '/component/confirm': {
    component: Confirm
  },
  '/component/progress': {
    component: Progress
  },
  '/component/x-img': {
    component: XImg
  },
  '/component/1px': {
    component: Onepx
  },
  '/component/orientation': {
    component: Orientation
  },
  '/component/shake': {
    component: Shake
  },
  '/component/cell': {
    component: Cell
  },
  '/demo': {
    component: Demo
  },
  '/component/emotion': {
    component: Emotion
  },
  '/component/search': {
    component: Search
  },
  '/project/donate': {
    component: Donate
  },
  '/project/thanks': {
    component: Thanks
  },
  '/component/spinner': {
    component: Spinner
  },
  '/component/calendar': {
    component: Calendar
  },
  '/component/circle': {
    component: Circle
  },
  '/component/countup': {
    component: Countup
  },
  '/component/color-picker': {
    component: ColorPicker
  },
  '/component/blur': {
    component: Blur
  },
  '/component/scroller': {
    component: Scroller
  },
  '/component/comment': {
    component: Comment
  },
  '/component/pulldown': {
    component: Pulldown
  },
  '/component/pullup': {
    component: Pullup
  },
  '/component/masker': {
    component: Masker
  },
  '/component/countdown': {
    component: Countdown
  },
  '/component/inview': {
    component: Inview
  },
  '/component/x-header': {
    component: XHeader
  },
  '/component/inline-calendar': {
    component: InlineCalendar
  },
  '/component/checker': {
    component: Checker
  },
  '/component/scroller/full': {
    component: ScrollerFull
  },
  '/component/number-roller': {
    component: NumberRoller
  },
  '/component/timeline': {
    component: Timeline
  },
  '/component/tabbar': {
    component: Tabbar
  },
  '/component/panel': {
    component: Panel
  },
  '/component/reddot': {
    component: Reddot
  },
  '/component/button-tab': {
    component: ButtonTab
  },
  '/component/scroller-swiper': {
    component: ScrollerSwiper
  },
  '/component/qrcode': {
    component: Qrcode
  }
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