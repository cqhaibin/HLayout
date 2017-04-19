/**
 * 控件集合
 * 一个控件应该包含如下内容：
 * 1. 控件在设计器界面的组件
 * 2. 控件在设计器界面的属性面板组件
 */
import Input from './input';

let dic = new Map();
dic.set("ElInput", Input );

export default{
    /**
     * 创建控件
     * @param createElement function vnode创建函数
     * @param data Object 供创建函数访问的数据对象
     * @returns VNode
     */
    generalComponent:function(createElement, data){
        return dic.get(data.type).generalComponent(createElement, data);
    }
}