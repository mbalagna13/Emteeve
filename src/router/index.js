import Vue from 'vue'
import Router from 'vue-router'
import Simple from '@/components/simple-view'
import Viewrooms from '../components/Viewroom'

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
    }
  ]
})
