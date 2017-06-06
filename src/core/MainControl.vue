<template>    
    <div class="layout-wrap" >
        <div class="layout-main">
            <div class="layout-main-inner" >
                <Layout ref="appMap"></Layout>
            </div>
        </div>
        <div class="layout-left">
            <AppSource></AppSource>
        </div>
        <div class="layout-right">
            <PropsPanel></PropsPanel>
        </div>
    </div>
</template>
<script>
    import AppSource from './AppSource';
    import PropsPanel from './PropsPanel';
    import propsProvider from '../store/props';
    import Layout from '../layout/layout';
    export default {
        name: 'Main',
        components: {
            AppSource,
            PropsPanel,
            Layout
        },
        mounted () {
            let self = this;
            this.$refs.appMap.$on('choose',function(evt){
                self.$store.commit('chooseComponent', evt.oldIndex);
            });
        },
        methods: {
            preview:function(evt){

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
<style>
    .layout-wrap{
        height: 100%;
    }
    .layout-main{
        width: 100%;
        height: 100%;
        float: left;
    }
    .layout-left{
        float: left;
        width: 200px;
        margin-left: -100%;
    }
    .layout-right{
        float: left;
        margin-left: -200px;
        width: 200px;
    }
    .layout-main-inner{
        margin: 0px 200px;
    }
</style>