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