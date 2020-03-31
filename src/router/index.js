import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
