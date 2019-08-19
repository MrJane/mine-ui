import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
<<<<<<< HEAD

=======
>>>>>>> 58a5e16e2a4d578bc46286af14effe08cb60b174
  ]
})
