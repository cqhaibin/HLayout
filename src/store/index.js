import Vue from 'vue';
import Vuex from 'vuex';
let state = {
    value: 'vuexsss'
}
let mutations = {
    setValue(state, value){
        state.value = value;
    }
}

Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations
});
export default store;