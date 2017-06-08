<script>

    import provider from '../mixs/sortableDecorate';
    import uitls from '../uitls';
    import Type from './type';

    //ui 组件
    export default {
        name: 'contain',
        data () {
            return {
                contain: null
            }
        },
        computed: {
            collection () {
                return this.$store.layout.collection;
            }
        },

        mounted () {
            var _wrap = this.$refs.contain;   
            this.contain = provider.createSortable(_wrap, {
                group: {
                    name: 'factory',
                    pull: false,
                    push: true
                }
            }, this); //创建的是布局容器，只接受布局的放置
        },

        render (createElement){
            var wrap = createElement('div',{
                ref: 'contain',
                class: {
                    'ui-contain-wrap': true
                }
            });

            return wrap;
        },
        methods: {
            onDragAdd (event){
                var tmp = {
                    'layoutOne': 1,
                    'layoutTwo': 2,
                    'layoutThr': 3
                };
                var type = event.item.getAttribute('data-type');
                //放置
                debugger
                this.$service.layout.add({size: tmp[type], type:Type.CONTAIN},null);
            }
        }
    }
</script>