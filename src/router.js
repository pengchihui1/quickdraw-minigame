import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import Home from './views/Home.vue'
import Train from './views/Train.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/train',
      name: 'train',
      component: Train
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import( /* webpackChunkName: "about" */ './views/Train.vue')
    }
  ]
})