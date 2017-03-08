import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex);

import List from './sPerson/list.vue'
import Single from './sPerson/single.vue'

$.ajaxSetup({
    async: false
});

Vue.use(VueRouter);
Vue.use(Vuex);
//创建router实例
const router = new VueRouter({
    routes: [
        { path: '/', component: List },
        { path: '/list', component: List },
        { path: '/single/:id', component: Single }
    ]
});

const app = new Vue({
    router,
    template: `<router-view></router-view>`
}).$mount('#app');