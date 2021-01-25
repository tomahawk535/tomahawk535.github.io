import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)
Vue.use(axios)

let store = new Vuex.Store ({
    state: {
        persons: null,
    },
    mutations: {
        SET_PERSON(state, people){
            state.persons=people;
        }

    },
    actions: {
        GET_PERSON({commit}){
            return axios('https://swapi.dev/api/people/', {
                method: "GET"
            })
                .then((people)=> {
                    commit('SET_PERSON', people.data.results);
                    return people;
                })
        }
    },
    getters: {
        PERSONS(state){
            return state.persons;
        }
    }

});
export default store;