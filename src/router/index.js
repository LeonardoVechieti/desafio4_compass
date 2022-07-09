import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form/Form.vue'
import PageSecondTab from '../views/PageSecondTab/PageSecondTab.vue'
import PageThirdTab from '../views/PageThirdTab/PageThirdTab.vue'
import PageSuccessTab from '../views/PageSuccessTab/PageSuccessTab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  },
  {
    path: '/second',
    name: 'secondTab',
    component: PageSecondTab
  },
  {
    path: '/third',
    name: 'thirdTab',
    component: PageThirdTab
  },
  {
    path: '/success',
    name: 'successTab',
    component: PageSuccessTab
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
