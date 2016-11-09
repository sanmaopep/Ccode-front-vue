import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './sUser/Register.vue'
import Login from './sUser/Login.vue'

Vue.use(VueRouter);

//创建router实例
const router = new VueRouter({
	routes:[
		{ path: '/', component: Login },
  		{ path: '/login', component: Login },
  		{ path: '/register', component: Register }
	]
});

const app = new Vue({
  router,
  template: `<router-view></router-view>`
}).$mount('#app');