import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex);

import App from './sIndex/App.vue'

$.ajaxSetup({
    async: false
});

new Vue({
    el: '#app',
    render: h => h(App)
})