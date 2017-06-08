import core from './core';
import Vue from 'vue';
import Element from 'element-ui';
import App from 'App';
import store from './store';
import Service from './mixs/serviceExtends';
import layout from  './layout';

import 'element-ui/lib/theme-default/index.css';
import './skins/appMap.css';
import AppMap from './core/AppMap';
Vue.component('AppMap', AppMap);

Vue.use(Element);
Vue.use(Service);

var app = new Vue({
    store,
    template: '<App/>',
    components:{App}
});
new layout().install({service: Service, $store: app.$store}); //加载业务系统
app.$mount('#app');