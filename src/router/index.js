import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form/Form.vue'
import Error404 from '../views/Error404/Error404.vue'
import Error401 from '../views/Error401/Error401.vue'

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
  },
  {
    path: "/401",
    name: "Error 401",
    component: Error401,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
