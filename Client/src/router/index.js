import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import AppModule1 from "../components/AppModule1";
import AppModule2 from "../components/AppModule2";
import AppModule3 from "../components/AppModule3";
import AppModule4 from "../components/AppModule4";
import AppModule5 from "../components/AppModule5";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppModule1',
      component: AppModule1
    },
    {
      path: '/module1',
      name: 'AppModule1',
      component: AppModule1
    },
    {
      path: '/module2',
      name: 'AppModule2',
      component: AppModule2
    },
    {
      path: '/module3',
      name: 'AppModule3',
      component: AppModule3
    },
    {
      path: '/module4',
      name: 'AppModule4',
      component: AppModule4
    },
    {
      path: '/module5',
      name: 'AppModule5',
      component: AppModule5
    }
  ]
})
