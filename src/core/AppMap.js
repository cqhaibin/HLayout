import provider from '../mixs/sortableDecorate';
import uitls from '../uitls';

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
    methods:{
        onDragAdd:function(evt){
            let type = evt.item.getAttribute('data-type');
            uitls.Dom.removeNode(evt.item); 
            this.$store.commit('addItem', { index: evt.newIndex, type: 'El' + type, value: '' });
        }
    },
    render (createElement, context) {
        debugger
        let wrap, self = this;
        let comps = [];
        this.vuexComps.forEach(function(data, index){
            comps.push( createElement('li',{
                'class':{
                    'list-item':true
                }
            },[createElement(data.type,{
                props:{
                    'value': data.value
                }
            })]));
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