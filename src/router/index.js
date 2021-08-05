import { createRouter, createWebHistory  } from 'vue-router'
// import Comic from 'views/comic/index'
import Comic from '/@/views/comic/Index.vue'
const Foo = { template: '<div>foo</div>' }

const routes = [
    { 
        path: '/comic1', 
        name: 'Comic1',
        component: () =>　import('/@/views/comic/Index.vue') 
    },
    { 
        path: '/', 
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        props: { msg: '首页'},
        component: () => import('/@/views/Home.vue')
    },
    { 
        path: '/comic', 
        component: Comic 
    },
    { 
        path: '/foo', 
        component: Foo 
    },
]
console.log(routes)

export default createRouter({
    history: createWebHistory(),
    routes
})