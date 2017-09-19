import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/simple-view'
import Login from '@/components/Login'
import Viewroom from '@/components/Viewroom.vue'
import Viewrooms from '@/components/Viewrooms'
import Signup from '@/components/Signup'
import CreateViewRooms from '@/components/Createroom'

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
      path:'/viewroom/:name',
      name: 'viewroom',
      component: Viewroom
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
