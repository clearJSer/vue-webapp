import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import History from '@/components/History'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/',
      name: 'Menu',
      component: Menu
    }
  ]
})
