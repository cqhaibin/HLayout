<script>

    import provider from '../mixs/sortableDecorate';
    import uitls from '../uitls';

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
                    name: 'contain',
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
                //放置
            }
        }
    }
</script>