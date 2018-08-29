import Vue from 'vue';
import Router from 'vue-router';
//引入页面
import Home from './views/Home.vue';
import List from './views/List.vue';
import ShoppingCar from './views/shoppingcar.vue';
import Me from './views/me.vue';
import Login from './views/login.vue';
import Detail from './views/detail.vue';
import Order from "./views/order.vue";
import Address from "./views/address.vue";

Vue.use(Router)
//定义组件
//let Home ={ template: "<h1>Home Page</h1>" };


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //定义路由规则
  routes: [
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/shoppingcar",
      name: "shoppingcar",
      component: ShoppingCar
    },
    {
      path: "/me",
      name: "me",
      component: Me
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
   
  ]
})
