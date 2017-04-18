import Vue from 'vue';
import Vuex from 'vuex';
let state = {
    components:[]
}
let mutations = {
    addItem(state, item){
        state.components.splice(item.index, 0, item);
    },
    setValue(state, item){
        state.components[item.index].value = item.value;
    }
}

Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations
});
export default store;