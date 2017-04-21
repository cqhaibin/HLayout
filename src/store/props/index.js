/**
 * 配置参数生成器
 * 需要区分类型：
 * 1. props类型的；
 * 2. 非props类型的
 */
import { Keys } from '../../uitls';
import input from './input';
import button from './button';
let dic = new Map();

let initgeneral = function(){
    dic.set(Keys.input, input);
    dic.set(Keys.button, button);
}();

export default {
    /**
     * 生成指定类型控件的属性列表
     * @param String type 控件类型
     * @returns Object 返回生成的Prpos对象
     */
    generalProps(type){
        let obj = {}, props = dic.get(type)
        let convertToProp = function(value){
            return {
                writable: true,
                enumerable: true,
                configurable: true,
                value: value
            };
        }
        for(var key in props){
            Object.defineProperty(obj,key, convertToProp(props[key]));
        }
        return obj;
    }
}