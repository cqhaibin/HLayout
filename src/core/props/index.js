/**
 * 配置参数生成器
 */
import input from './input';
let dic = new Map();

let initgeneral = function(){
    dic.set('ElInput', input);
}();

export default {
    /**
     * 生成指定类型控件的属性列表
     * @param String type 控件类型
     * @returns Object 返回生成的Prpos对象
     */
    generalProps(type){
        let obj = {};
        debugger
        Object.defineProperties(obj, {
            value: {
                value:''
            },
            placeholder: {
                value: 'aaaa'
            }
        });
        return obj;
    }
}