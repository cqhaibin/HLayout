<template>
    <div class="appMap" ref="appMap" >
    </div>
</template>
<script>
    import provider from '../mixs/sortableDecorate';
    export default {
        name: 'AppMap',
        data: function(){
            return {
                sortableHandle: null
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
                debugger;
            }
        }
    }
</script>
<style>
    .appMap{
        height: 100%;
    }
    .appMap .list-item{
        box-sizing: border-box;
    }
    .appMap .sortable-ghost{
        height: 100px !important;
        background: red !important;
        list-style-type: none;
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