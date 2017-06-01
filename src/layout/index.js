//入口

import store from './store';
import Service from './service';

class Layout {
    constructor(){
        this.installed = false;
    }
    install (cxt){
        //对vue实例注入一些api，Service如何与vue组件关联
        cxt.$store.registerModule('layout', store); //注册状态模块
        cxt.service.registerService('layout', new Service());
        this.installed = true;
    }
}
export default Layout;