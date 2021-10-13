import Vue from 'vue'
import VueRouter from 'vue-router'

import AddNutrient from './components/admin/AddNutrient.vue';
import AddRecipe from './components/admin/AddRecipe.vue';
import AddBlog from './components/admin/AddBlog.vue';

Vue.use(VueRouter)

export default new VueRouter({

    mode: 'history',
    routes: [{
            path: '/dashboard/dodaj-recept',
            component: AddRecipe,
            name: 'dodaj-recept'
        },

        {
            path: '/dashboard/dodaj-sastojak',
            component: AddNutrient,
            name: 'dodaj-sastojak'
        },

        {
            path: '/dashboard/dodaj-blog',
            component: AddBlog,
            name: 'dodaj-blog'
        },
    ]
})
