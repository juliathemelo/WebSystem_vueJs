import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router