import Vue from 'vue'
import App from './sIndex/App.vue'

$.ajaxSetup({
    async: false
});

new Vue({
    el: '#app',
    render: h => h(App)
})