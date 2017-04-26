<template>
    <div>           
        <div class="layout-head">
            <el-button v-on:click="preview" >预览</el-button>
            <el-button type="primary" v-on:click="save" >保存</el-button>
        </div>
        <div class="layout-main">
            <component :is="curComponent"></component>
        </div>
    </div>
</template>
<script>
    import MainControl from './MainControl';
    import Preview from './preview';
    import propsProvider from '../store/props';
    export default {
        name: 'Layout',
        components: {
            MainControl,
            Preview
        },
        data () {
            return{
                curComponent: MainControl
            }
        },
        methods: {
            preview:function(evt){
                this.curComponent = Preview;
            },
            save:function(evt){
                //值需要做转换
                let comps = this.$store.state.components;
                let datas = [];
                comps.forEach(function(comp,index){
                    let propKeys = propsProvider.getProps(comp.type);
                    let props = new Object();
                    propKeys.forEach(function(key,irow){
                        props[key] = comp.props[key];
                    });
                    datas.push({
                        type: comp.type,
                        index: comp.index,
                        props: props
                    });
                });
                console.log(datas);
            }
        }
    }
</script>