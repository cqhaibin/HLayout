/**
 * create: 2017-01-14 sam
 * 提供mixs sortable的事件到vue组件上
 */

import Sortable from 'sortablejs';

//组件监听的事件
const eventsListened = ['Start','Add','Remove','Update','End'];
//组件发布的通知
const eventsToEmit = ['Choose','Sort','Filter', 'Clone'];

/**
 * Sortable的包装内，实现sortable与vue组件的结合
 */
class SortableDecorate {

    /**
     * 构造Sortable的包装类
     * @param el 实现sortable的DOM元素
     * @param options sortable的配置参数
     * @param cxt vue组件实例
     */
    constructor(el, options, cxt){
        this.cxt = cxt;
        this.sortable = this.createSortable(options);
    }

    /**
     * 代理触发vue的事件，也就是触发组件监听的事件
     * @param eventName 事件名称
     */
    delegateAndEmit(eventName){
        return (eventData) =>{
            this.cxt['onDrag' + eventName](eventData);
        };
    }
    /**
     * 组件发布的通知事件
     * @param eventName 通知事件类型
     * @param eventData 通知的参数
     */
    emit(eventName, eventData){
        this.cxt.$nextTick(()=>this.cxt.$emit(eventName.toLowerCase(), eventData));
    }
    /**
     * 设置sortable实例的关系
     * @param el 实现sortable的DOM元素
     * @param options sortablejs的配置参数
     */
    createSortable(el, options){
        let eventsAdded = {};
        eventsListened.forEach(elt=>{
            eventsAdded['on' + elt] = this.delegateAndEmit(elt);
        });
        eventsToEmit.forEach(elt=>{
            eventsAdded['on' + elt] = emit.bind(this,elt);
        });
        let opts = Object.assign({}, options, eventsAdded);
        return new Sortable(el, opts);
    }
}

export default {
    /**
     * 创建与vue结合的sortable的实例
     * @param el 实现sortable的DOM元素
     * @param options sortable的配置参数
     */
    createSortable: function(el, options){
        var sortableDective = new SortableDecorate(el, options);
        return sortableDective.sortable;
    }
}