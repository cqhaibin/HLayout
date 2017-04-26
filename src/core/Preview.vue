<script>
    export default {
        name: 'Preview',
        computed: {
            comps:function(){
                return this.$store.state.components;
            }
        },
        render:function(createElement, cxt){
            return createElement('div',{
                'class':{
                    'preview-wrap': true
                }
            },[createElement('ul',this.comps.map(function(data,index){
                return createElement('li',[createElement(data.type,{
                    props: data.props
                }, data.props.text)]); //需要区分：props、solt内容、方法等属性内容
            }))]);
        }
    }
</script>