import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './views/component/main'
import Button from "./views/component/children/Button";
import Grid from './views/component/children/Grid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/components',
      name: 'components',
      component: Component,
      redirect: '/components/button',
      children: [
        {
          path: 'button',
          component: Button
        },
        {
          path: 'grid',
          component: Grid
        }
      ]
    },
  ]
})
