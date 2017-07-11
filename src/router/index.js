import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import History from '@/components/History'
import Friends from '@/components/Friends'
import Plan from '@/components/Plan'
import Activity from '@/components/Activity'
import Medal from '@/components/Medal'
import AddressList from '@/components/AddressList'
import My from '@/components/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/medal',
      name: 'Medal',
      component: Medal
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
