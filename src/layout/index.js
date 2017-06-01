//入口

import store from './store';

class Layout {
    constructor(){
        this.installed = false;
    }
    install (cxt){
        //对vue实例注入一些api
        cxt.$store.registerModule('layout', store); //注册状态模块
        this.installed = true;
    }
}
export default Layout;