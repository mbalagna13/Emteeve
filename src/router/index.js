import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Simple from '@/components/simple-view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple-view',
      component: Simple
    }
  ]
})
