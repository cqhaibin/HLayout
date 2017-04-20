<template>
    <div>
        <component :is="compName"></component>
    </div>
</template>
<script>
    import controlProvider from '../controls';
    export default {
        name: 'Props',
        computed: {
            compName: function(){
                return this.$store.state.currentCompnent 
                && controlProvider.getPropComponent(this.$store.state.currentCompnent.type);
            }
        }
    }
</script>