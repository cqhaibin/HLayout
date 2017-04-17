import core from './core';
import Vue from 'vue';
import Element from 'element-ui';
import App from 'App';
import store from './store';

import 'element-ui/lib/theme-default/index.css';
import './skins/appMap.css';
import AppMap from './core/AppMap';
Vue.component('AppMap', AppMap);

Vue.use(Element);
debugger
var app = new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components:{App}
});