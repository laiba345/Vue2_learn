<template>
    <div>
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
    </div>
</template>

<script>
export default {
    name: 'Banner',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
        back() {
            this.$router.back()
        }, 
        forward() {
            this.$router.forward() 
        }
    },
};
</script>

<style lang="scss" scoped>

</style>