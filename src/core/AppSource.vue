<template>
    <ul class="list" ref="sourceList" >
        <li class="list-item">标签</li>
        <li class="list-item">输入框</li>
        <li class="list-item">按钮</li>
    </ul>
</template>
<script>
    import Sortable from 'sortablejs';
    export default {
        name: 'AppSource',
        data: function(){
            return {
                sortableHander:null
            }
        },
        mounted: function(){
            var list = this.$refs.sourceList;
            this.sortableHander = new Sortable(list,{
                group: 'app'
            });
        }
    }
</script>

<style>
    .list{
        list-style-type: none;
    }
    .list-item{
        margin: 0px;
        padding: 10px;
    }
</style>