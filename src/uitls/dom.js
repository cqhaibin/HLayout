/**
 * 实现对Dom元素操作工具类
 */
class Dom{
    /**
     * 移除一个元素
     * @param node 需要被移除的元素
     */
    static removeNode(node){
        node.parentNode.removeChild(node);
    }
    /**
     * 添加一个元素到指定的父元素下面
     * @param parentNode 父元素
     * @param node 需要被添加的元素
     */
    static addNode(parentNode,node){
        parentNode.append(node);
    }

    /**
     * 获取dom元素所有的data属性内容
     * @param dom DOM元素
     */
    static getDataOfDom(dom){
        var _attrs = Array.prototype.slice.apply(dom.attributes);
        var _rets = Object.create({});
        _attrs.map(function(item){
            if(item.name.slice(0,5) == 'data-'){
                _rets[item.name] = item;
            }
        });
        return _rets;
    }
}

export default Dom;
