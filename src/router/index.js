import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Test from '@/pages/test'
import Qrcode from '@/pages/qrcode'
import Voucher from '@/pages/voucher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: Qrcode
    }, {
      path: '/voucher',
      name: 'voucher',
      component: Voucher
    }
  ],
  base: '/video/', // 打包项目根目录
})
