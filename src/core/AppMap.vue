<template>
    <div class="appMap" ref="appMap" >
    </div>
</template>
<script>
    import Sortable from 'sortablejs';
    export default {
        name: 'AppMap',
        data: function(){
            return {
                sortableHander: null
            }
        },
        mounted () {
            var map = this.$refs.appMap;
            this.sortableHander = new Sortable(map,{
                group: {
                    name: 'app',
                    pull: false,
                    put: true,
                },
                ghostClass: 'ghost-a',
                onAdd: function(){
                    console.log('add' + arguments);
                },
                onUpdate: function(){
                    console.log('update' + arguments)
                },
                onMove: function(evt, originEvent){
                    debugger;
                },
                onFilter: function(evt){
                    debugger;
                }
            });
        }
    }
</script>
<style>
    .appMap{
        height: 100%;
    }
    .appMap .sortable-ghost{
        height: 100px !important;
        background: red !important;
        list-style-type: none;
    }
    .appMap .list-item{
        height: 50px;
        background: gray;
    }
</style>