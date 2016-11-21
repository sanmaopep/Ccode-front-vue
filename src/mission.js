import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './sMission/list.vue'
import Submit from './sMission/submit.vue'
import Single from './sMission/single.vue'

$.ajaxSetup({
    async: false
});

Vue.use(VueRouter);

//创建router实例
const router = new VueRouter({
    routes: [
        { path: '/', component: List },
        { path: '/list', component: List },
        { path: '/submit', component: Submit },
        { path: '/single/:id', component: Single }
    ]
});

const app = new Vue({
    router,
    template: `<router-view></router-view>`
}).$mount('#app');