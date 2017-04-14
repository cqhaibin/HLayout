/**
 * create: 2017-01-14 sam
 * 提供mixs sortable的事件到vue组件上
 */
//组件监听的事件
const eventsListened = ['Start','Add','Remove','Update','End'];
//组件发布的通知
const eventsToEmit = ['Choose','Sort','Filter', 'Clone'];
export default {
    /**
     * 代理触发vue的事件，也就是触发组件监听的事件
     * @param eventName 事件名称
     */
    delegateAndEmit: function(eventName){
        
    },
    /**
     * 组件发布的通知事件
     * @param eventName 通知事件类型
     * @param eventData 通知的参数
     */
    emit: function(eventName, eventData){

    },
    /**
     * 设置sortable实例的关系
     * @param sortable sortablejs实例
     */
    relationSortable: function(sortable){

    }
}