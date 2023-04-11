<template>
    <div>
        <h1>当前求和为: {{ sum }}</h1>
        <h1>当前求和放大10倍为: {{ bigSum }}</h1>
        <h3>我在{{ school }}, 学习{{ subject }}</h3>
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
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'Count',
    data() {
        return {
            n: 1, // 用户选择的数
        }
    },
    computed: {
        /* 靠程序员自己亲自去书写计算属性 */
        /* he() {
            return this.$store.state.sum 
        }, 
        xuexiao() {
            return this.$store.state.school
        }, 
        xueke() {
            return this.$store.state.subject 
        } */
        // 借助mapState生成计算属性，从state中读取数据（对象写法） 
        // ...mapState({ he: 'sum', xuexiao: 'school', 'xueke': 'subject' })
        /* sum() {
            return this.$store.state.sum 
        }, 
        school() {
            return this.$store.state.school
        }, 
        subject() {
            return this.$store.state.subject 
        } */
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        // 表示生成的属性名和读取出来的属性名必须一致
        ...mapState(['sum', 'school', 'subject']),

        /* ************************************** */
        /* bigSum() {
            return this.$store.getters.bigSum
        } */

        // 对象写法
        // ...mapGetters({ bigSum: 'bigSum' })
        // 数组写法
        ...mapGetters(['bigSum'])

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
