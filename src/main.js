import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Yoyoyo from './components/Yoyoyo.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/bar', component: HelloWorld },
    { path: '/yoyo', component: Yoyoyo }
  ] 
})

new Vue({
  router,
  render: h => h( App )
}).$mount('#app')