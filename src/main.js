import core from './core';
import Vue from 'vue';
import Element from 'element-ui';
import App from 'App';

import 'element-ui/lib/theme-default/index.css';
import './skins/appMap.css';
import AppMap from './core/AppMap';
Vue.component('AppMap', AppMap);

Vue.use(Element);
debugger
var app = new Vue({
    el: '#app',
    template: '<App/>',
    components:{App}
});