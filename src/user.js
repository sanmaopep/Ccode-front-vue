import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './sUser/Register.vue'
import Forget from './sUser/forgetPass.vue'
import Login from './sUser/Login.vue'
import Submit from './sPerson/submit.vue'
import myInfo from './sPerson/single.vue'

$.ajaxSetup({
    async: false
});

Vue.use(VueRouter);

//创建router实例
const router = new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/forget', component: Forget },
        { path: '/myinfo/:id', component: myInfo },
        { path: '/changeInfo', component: Submit }
    ]
});

const app = new Vue({
    router,
    template: `<router-view></router-view>`
}).$mount('#app');