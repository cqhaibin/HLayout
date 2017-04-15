<template>
    <ul class="appMap" ref="appMap" >
        <li class="list-item" v-for="item in realList" >{{item.title}}</li>
    </ul>
</template>
<script>
    import provider from '../mixs/sortableDecorate';
    export default {
        name: 'AppMap',
        data: function(){
            return {
                sortableHandle: null,
                realList: []
            }
        },
        mounted () {
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
            }
        }
    }
</script>
<style>
    .appMap{
        height: 100%;
        list-style-type: none;
    }
    .appMap .list-item{
        box-sizing: border-box;
    }
    .appMap .sortable-ghost{
        height: 100px !important;
        background: red !important;
    }
    .appMap .list-item{
        width: 100%;
        height: 50px;
        background: gray;
    }
    .appMap .ghost-map, .appMap .chosen-map{
        background:red;
    }
</style>