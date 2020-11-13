import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import User from '../components/user.vue'
import Department from '../components/department.vue'
import Employee from '../components/employee.vue'
import Position from '../components/position.vue'


  Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'./login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home,
    redirect: '/user', children:[
      {path:'/user',component:Department},
      {path:'/department',component: User},
      {path:'/employee',component: Employee},
      {path:'/position',component: Position}
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
