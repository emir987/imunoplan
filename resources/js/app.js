import Vue from 'vue'
const Vitamin = () => import('./components/nutrients/Vitamin.vue');
const Protein = () => import('./components/nutrients/Protein.vue');
const SaturatedFats = () => import('./components/nutrients/fats/SaturatedFats.vue');
const UnsaturatedFats = () => import('./components/nutrients/fats/UnsaturatedFats.vue');
const TransFats = () => import('./components/nutrients/fats/TransFats.vue');
const Carbs = () => import('./components/nutrients/Carbs.vue');

const PlanFood = () => import('./components/plan/PlanFood.vue');
const Calculator = () => import('./components/plan/Calculator.vue');
const Recipe = () => import('./components/plan/Recipe.vue');
const SaveRecipe = () => import('./components/plan/SaveRecipe.vue');
const SavedPlans = () => import('./components/plan/registered-users/SavedPlans.vue');
const Messages = () => import('./components/Messages.vue');
const Contact = () => import('./components/Contact.vue');

const Blog = () => import('./components/blog/Blog.vue');
const BlogInfo = () => import('./components/blog/BlogInfo.vue');

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import {
    BootstrapVue,
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
    store
} from './store/store';
import router from './router'

require('./bootstrap');

window.Event = new Vue();
Vue.use(BootstrapVue)
Vue.use(Chartkick.use(Chart))


Vue.component('plan-food', PlanFood);
Vue.component('vitamin-click', Vitamin);
Vue.component('calculator', Calculator);
Vue.component('recipe', Recipe);
Vue.component('save-recipe', SaveRecipe);
Vue.component('saved-plans', SavedPlans);
Vue.component('messages', Messages);
Vue.component('contact', Contact);
Vue.component('protein', Protein);
Vue.component('saturated-fats', SaturatedFats);
Vue.component('unsaturated-fats', UnsaturatedFats);
Vue.component('trans-fats', TransFats);
Vue.component('carbs', Carbs);
Vue.component('blog', Blog);
Vue.component('blog-info', BlogInfo);

const app = new Vue({
    el: '#app',
    store: store,
    router
});
