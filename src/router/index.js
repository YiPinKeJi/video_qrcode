import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Qrcode from '@/pages/qrcode'
import Voucher from '@/pages/voucher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qrcode',
      component: Qrcode
    },{
      path: '/main',
      name: 'Main',
      component: Main
    },{
      path: '/voucher',
      name: 'voucher',
      component: Voucher
    }
  ],
  base: '/video/', // 打包项目根目录
})
