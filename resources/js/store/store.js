import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import PlusIngredient from "../components/admin/PlusIngrdient";


export const store = new Vuex.Store({
    state: {
        ingredients_value: [],
        ingredients: [],
        components: [PlusIngredient],
    },
    mutations: {
        addIngredient: (state) => {
            state.components.push(PlusIngredient)
        },
        removeIngredient: (state, index) => {
            state.components.splice(index, 1);
            state.ingredients_value.splice(index, 1)
        },
        ingredients: (state, ingredients) => {
            state.ingredients = ingredients;
        },
        populateArray: (state, no) => {
            for (let index = state.ingredients_value.length; index <= no; index++) {
                state.ingredients_value.push({
                    name: 'Odaberite sastojak',
                    quantity: '',
                    measure: 'gr',
					id: 0
                });
            }
        },
        updateIngredientName: (state, payload) => {
            console.log(payload.key1)
			state.ingredients_value[payload.key2].id = payload.key1.id;
            state.ingredients_value[payload.key2].name = payload.key1.name;
            state.ingredients_value[payload.key2].measure = payload.key1.measure_name;

        },
        updateQuantity: (state, payload) => {
            state.ingredients_value[payload.key2].quantity = payload.key1;
        },
    }
})
