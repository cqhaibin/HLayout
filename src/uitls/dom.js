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
}

export default Dom;
