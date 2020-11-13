import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
// import Product from './pages/product.vue'
// import Detail from './pages/detail.vue'
// import Cart from './pages/cart.vue'
// import Order from './pages/order.vue'
// import OrderList from './pages/orderList.vue'
// import OrderConfirm from './pages/orderConfirm.vue'
// import OrderPay from './pages/orderPay.vue'
// import AliPay from './pages/aliPay.vue'
// import Login from './pages/login.vue'
// import { resolve } from 'core-js/fn/promise'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login.vue')
    },
    {
      path:'/',
      name:'home',
      component: Home,
      redirect:'/index',
      children:[
        {
          path: 'index',
          name: 'index',
          component: Index
        }, {
          path: 'product/:id',
          name: 'product',
          // component: Product,
          component: () => import('./pages/product.vue')
        }, {
          path: 'detail/:id',
          name: 'detail',
          // component: Detail,
          component: () => import('./pages/detail.vue')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./pages/cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./pages/order.vue'),
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: () => import('./pages/orderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('./pages/orderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('./pages/orderPay.vue')
        },
        {
          path: 'aliPay',
          name: 'order-aliPay',
          component: () => import('./pages/aliPay.vue')
        }
      ]
    }
  ]
})