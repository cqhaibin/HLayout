//服务
import Contain from './model/contain';
import Component from './model/component';
import {generalGuid} from '../uitls';
import Type from './type';

class ServiceCore {
    addContain (opt, parent){
        let isRoot = parent ? false: true;
        opt.parent = parent;
        opt.size = opt.size || 3;
        opt.id = generalGuid();
        var contain = new Contain(opt);
        contain.root = isRoot ? contain : null;
    }
}

class Service {
    constructor (){
        this.core = new ServiceCore();
    }
    /**
     * 添加一个容器或组件
     * @param opt 配置参数
     * type: 容器，组件
     * name: 名称
     * key: key，
     * @param parent 父级容器
     */
    add (opt, parent){
        if(opt.type == Type.CONTAIN){
            this.core.addContain(opt);
        }
    }
}

export default Service;