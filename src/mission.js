import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex);

import List from './sMission/list.vue'
import Submit from './sMission/submit.vue'
import Single from './sMission/single.vue'

$.ajaxSetup({
    async: false
});


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