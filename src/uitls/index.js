import Dom from './dom';
import Keys from './Keys';

export default {
    Dom
};
export {
    Keys
}
/**
 * 根据类型获取指定的组件惟一标识
 */
export function getKeyForType(type){
    return Keys[type.toLowerCase()];
}

/**
 * 生成guid编号
 */
export function generalGuid(){
    let bit = 32;
    let bits = new Array();
    while(bit--){
        bits.push(Math.floor(Math.random() * 16.0).toString(16));
    }
    var bitStr = bits.slice(0,8) + '-' + bits.slice(8,12) + '-' + bits.slice(12,16) 
    + '-' + bits.slice(16,20) + '-' + bits.slice(20,32);
    return bitStr.replace(/,/g, "");
}