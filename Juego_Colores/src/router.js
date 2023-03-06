import Vue from 'vue'
import VueRouter from 'vue-router'


import Header from './components/Header'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/header'},

        {path: '/header', component: Header}

    ]


})