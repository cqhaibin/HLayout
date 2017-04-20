import provider from '../mixs/sortableDecorate';
import uitls from '../uitls';
import controlProvider from '../controls';

let opt = {
    name: 'AppMap',
    data: function(){
        return {
            sortableHandle: null
        }
    },    
    computed: {
        vuexComps:function(){
            return this.$store.state.components;
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
    methods: {
        onDragAdd:function(evt){
            let type = evt.item.getAttribute('data-type');
            uitls.Dom.removeNode(evt.item); 
            this.$store.commit('addItem', { index: evt.newIndex, type: 'El' + type });
        }
    },
    render (createElement, context) {
        let wrap, self = this;
        let comps = [];
        this.vuexComps.forEach(function(data, index){
            comps.push( createElement('li',{
                'class':{
                    'list-item':true
                }
            },controlProvider.generalComponent(createElement,data)));
        });
        wrap = createElement('ul',{
            'class':{
                'appMap': true
            },
            ref: 'appMap'
        },comps);
        return wrap;
    },
    beforeUpdate () {
        debugger
    }
}
export default opt;