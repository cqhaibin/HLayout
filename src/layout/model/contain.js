//容器，也就是一行

class Contain {
    constructor (opt){
        this.id = opt.id;
        this.name = opt.name;
        this.root = opt.root;
        this.parent = opt.parent;
        this.size = opt.size;
        this.index = opt.index;
        this.childs = [];
        this.push = opt.push;
        this.attributes = opt.attributes;
    }
}

export default Contain;