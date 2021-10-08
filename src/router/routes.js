import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Start from '../view/Start'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'start',
        component: Start
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router