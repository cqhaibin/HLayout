<template>
    <div>
        <input type="text" v-model="value" />
        <button type="button" v-on:click="setValue">setValue</button>
    </div>
</template>
<script>
    export default {
        name: 'Props',
        data(){
            return {
                value: 'sdfa'
            };
        },
        methods: {
            setValue(){
                debugger
                this.$store.commit('setValue',this.value);
            }
        }
    }
</script>