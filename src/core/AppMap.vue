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
                onAdd: function(){
                    console.log('add' + arguments);
                },
                onUpdate: function(){
                    console.log('update' + arguments)
                }
            });
        }
    }
</script>
<style>
    .appMap{
        height: 100%;
    }
</style>