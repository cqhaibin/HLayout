import provider from '../mixs/sortableDecorate';
import uitls from '../uitls';

let opt = {
    name: 'AppMap',
    data: function(){
        return {
            sortableHandle: null,
            realList: [],
            value: 'adsf'
        }
    },
    mounted () {
        debugger
        var map = this.$refs.appMap;
        this.sortableHandle = provider.createSortable(map,
        {
            group: {
                name: 'app',
                pull: false,
                put: true,
            },
            ghostClass: 'ghost-map',
            chosenClass: 'chosen-map'
        }, this);
    },
    methods:{
        onDragAdd:function(evt){
            debugger
            let type = evt.item.getAttribute('data-type');
            uitls.Dom.removeNode(evt.item); 
            this.realList.splice( evt.newIndex, 0, 'el' + type);
        }
    },
    render (createElement, context) {
        debugger
        let wrap;
        wrap = createElement('ul',[
            createElement('li',{
                'class':{
                    'list-item':true
                }
            })
        ],{
            'class':{
                'appMap': true
            },
            ref: 'appMap'
        })
        return wrap;
    }
}
export default opt;