export default {
    register({ commit }, userId) {
        setTimeout(() => {
            commit('register', userId);
        } ,1000);
    }
}