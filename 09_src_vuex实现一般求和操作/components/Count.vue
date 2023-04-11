<template>
    <div>
        <h1>当前求和为: {{ $store.state.sum }}</h1>
        <h1>当前求和放大10倍为: {{ $store.getters.bigSum }}</h1>
        <!-- 收集到的东西强制往number类型进行转换 -->
        <!-- 获取收集到的数据就是n，select中的数据收集通过v-model来进行收集操作 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用户选择的数
        }
    },
    methods: {
        increment() {
            // 不能直接进行调用，必须通过$store来进行调用操作
            this.$store.dispatch('jia', this.n)
            // 要是在actions当中没有别的多余的逻辑，可以跳过actions直接进行commit操作
            // this.$store.commit('JIA', this.n)
        },
        decrement() {
            this.$store.dispatch('jian', this.n)
        },
        incrementOdd() {
            /* if (this.$store.state.sum % 2) {
                this.$store.dispatch('jia', this.n)
            } */
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            /* setTimeout(() => {
                this.$store.dispatch('jia', this.n)
            }, 1000); */
            this.$store.dispatch('jiaWait', this.n)
        }
    }
};
</script>

<style lang="css" scoped>
button {
    margin-left: 5px;
}
</style>
