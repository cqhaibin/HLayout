// 存储
import Componet from './model/component';
import Contain from './model/contain';

let keys = {
    /**
     * 添加一个容器
     */
    addContain: 'ADDCONTAIN',
    /**
     * 添加一个应用（组件）
     */
    addComponent: 'ADDCOMPONENT',
    /**
     * 移除一个容器（包含下面所有的组件）
     */
    removeContain: 'REMOVECONTAIN',
    /**
     * 移除一个应用（组件）
     */
    removeComponent: 'REMOVECOMPONENT',
    /**
     * 获取所有数据
     */
    getAll: 'GETALL',
    /**
     * 根据条件获取容器
     */
    getContains: 'GETCONTAINS',
    /**
     * 根据条件获取应用（组件）
     */
    getComponents: 'GETCOMPONENTS',
    /**
     * 获取处于活动状态的组件（应用）
     */
    getCurrentComponet: 'GETCURRENTCOMPONET'
};

let state = {
    /**
     * 容器列表
     */
    collection: [],
    /**
     * 当前处于活动状态的组件（应用）
     */
    current: null
};
let getters = {
    [keys.getAll] ( state ) {
        return state.collection;
    },
    [keys.getContains] ( state, func){
        return state.map(func);
    },
    [keys.getComponents] (state, func){
        let components = [];
        state.map(function(value, index){
            let temp = value.childs.map(func);
            components = components.concat(temp);
        });
        return components;
    }
};
let mutations = {
    
} 