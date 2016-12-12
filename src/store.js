import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ]
    },
    getters: {
        unregisteredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            });
        },
        registrations(state) {
            return state.registrations;
        },
        totalRegistrations(state) {
            return state.registrations.length;
        }
    },
    mutations: {
        register(state, userId) {
            const date = new Date;
            const user = state.users.find(user => {
                return user.id == userId;
            });
            user.registered = true;
            const registration = {
                userId: userId,
                name: user.name,
                date: date.getMonth() + '/' + date.getDay()
            };
            state.registrations.push(registration);
        },
        unregister(state, payload) {
            const user = state.users.find(user => {
                return user.id == payload.userId;
            });
            user.registered = false;
            const registration = state.registrations.find(registration => {
                return registration.userId == payload.userId;
            });
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        }
    },
    actions: {
        register({ commit }, userId) {
            setTimeout(() => {
                commit('register', userId);
            } ,1000);
        }
    }
});