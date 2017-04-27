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
    chooseComponent(state, index){
        state.currentCompnent = state.components[index];
    },
    changeOfPosition(state, param){
        let comps = state.components;
        comps.splice(param.newIndex,0, comps.splice(param.oldIndex,1)[0]);
    }
}

Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations
});
export default store;