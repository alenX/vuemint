import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MintDemo from '@/components/MintDemo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mint',
      name: 'MintDemo',
      component: MintDemo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
