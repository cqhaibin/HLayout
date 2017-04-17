<template>
    <div class="layout-wrap" >
        <div class="layout-main">
            <div class="layout-main-inner" >
                <AppMap></AppMap>
            </div>
        </div>
        <div class="layout-left">
            <AppSource></AppSource>
        </div>
        <div class="layout-right">
            <Props></Props>
        </div>
    </div>
</template>
<script>
    import AppSource from './AppSource';
    import Props from './Props';
    export default {
        name: 'Layout',
        components: {
            AppSource,
            Props
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