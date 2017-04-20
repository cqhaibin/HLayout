import Vue from 'vue';
import Vuex from 'vuex';
import PropsProvider from './props';
let state = {
    components:[],
    currentCompnent: null //当前选中的组件
}
let mutations = {
    addItem(state, item){
        let props = PropsProvider.generalProps(item.type);
        item.props = props;
        state.components.splice(item.index, 0, item);
    },
    setValue(state, item){
        debugger
        state.components[item.index].props = {
            value: item.value,
            placeholder: 'ffff'
        }
    },
    chooseComponent(state, index){
        state.currentCompnent = state.components[index];
    }
}

Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations
});
export default store;