import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/simple-view'
import Login from '@/components/Login'
import Viewrooms from '@/components/Viewroom'
import Signup from '@/components/Signup'
import CreateViewRooms from '@/components/Viewrooms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple-view',
      component: Simple
    },
    {
      path:'/viewrooms',
      name: 'viewrooms',
      component: Viewrooms
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/createviewroom',
      name: 'createviewroom',
      component: CreateViewRooms  
    }

  ]
})
