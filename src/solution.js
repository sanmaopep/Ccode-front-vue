import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './sSolution/list.vue'
import Submit from './sSolution/submit.vue'
import Single from './sSolution/single.vue'

$.ajaxSetup({
    async: false
});

Vue.use(VueRouter);

//创建router实例
const router = new VueRouter({
    routes: [
        { path: '/', component: List },
        { path: '/list', component: List },
        { path: '/submit/:id/:missionTitle/:money', component: Submit },
        { path: '/single/:id', component: Single }
    ]
});

const app = new Vue({
    router,
    template: `<router-view></router-view>`
}).$mount('#app');