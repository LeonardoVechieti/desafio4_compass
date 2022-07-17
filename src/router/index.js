import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form/Form.vue'
import Error404 from '../views/Error404/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  },
  {
    path: "*",
    name: "Error 404",
    component: Error404,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
