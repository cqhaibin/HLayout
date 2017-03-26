<template>
    <div>
        <Layout></Layout>
    </div>
</template>
<script>
    import core from './core'
    export default {
        name: 'app',
        components:{
            Layout: core.Layout
        }
    }
</script>