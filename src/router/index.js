import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Details from '@/view/Details'
import City from '@/view/City'

Vue.use(Router)

let routes=[
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name:'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/details/:id',
    name:'Details',
    component: Details,
    meta: {
      title: '详情介绍'
    }
  },
  {
    path: '/city',
    name:'City',
    component: City,
    meta: {
      title: '城市'
    }
  }
]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: '' // 配置路由默认选中class
})
