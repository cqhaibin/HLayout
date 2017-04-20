<template>
    <div >
        <el-input v-model="value" ></el-input>
    </div>
</template>
<script>
    export default {
        name: 'InputProp',
        computed: {
            value: { 
                get: function(){
                    return this.$store.state.currentCompnent.props.value;
                },
                set: function(v){
                    this.$store.state.currentCompnent.props.value = v;
                }
            }
        }
    }
</script>