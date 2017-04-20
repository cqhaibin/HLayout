<template>
    <div >
        <el-input v-model="text" ></el-input>
    </div>
</template>
<script>
    export default {
        name: 'ButtonProp',
        computed: {
            text: { 
                get: function(){
                    return this.$store.state.currentCompnent.props.text;
                },
                set: function(v){
                    this.$store.state.currentCompnent.props.text = v;
                }
            }
        }
    }
</script>