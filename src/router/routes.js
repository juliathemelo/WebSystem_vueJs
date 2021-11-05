import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Start from '../view/Start'
import Product from '../view/Product'
import View from '../view/View';

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
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/view',
        name: 'view',
        component: View
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router