<template>
    <ul class="list" ref="sourceList" >
        <li class="list-item" v-for="im in data" >{{im.text}}</li>
    </ul>
</template>
<script>
    import provider from '../mixs/sortableDecorate';
    export default {
        name: 'AppSource',
        data: function(){
            return {
                sortableHandle:null,
                data: [{"text":"标签"},{"text":"输入框"},{"text":"按钮"}]
            }
        },
        mounted: function(){
            var list = this.$refs.sourceList;
            let options = {
                group: {
                    name: 'app',
                    pull: 'clone',
                    put: false
                },
                sort: false,
                dragClass: 'sortable-drag'
            };
            this.sortableHandle = provider.createSortable(list,options,this);
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
    .sortable-drag{
        background: #666666;
        opacity: 0.5;
        color: #fff;
        display: inline-block;
        border-radius: 2px;
        padding: 4px 20px;
    }
    .sortable-drag:after{
        content: '';
        display: inline-block;
        width: 0px;
        height: 0px;
        margin-left: 5px; 
        border-left: 8px solid red;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
</style>