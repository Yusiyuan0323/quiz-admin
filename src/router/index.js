import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue'
import QuestionView from '../views/QuestionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/question',
    name: 'Question',
    component: QuestionView
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
