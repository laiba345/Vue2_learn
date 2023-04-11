<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为: {{ sum }}</h3>
        <h3>列表中第一个人的名字是: {{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字:" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        };
    },
    computed: {
        personList() {
            // 读取的相关属性是存储在state当中的
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        },
        // ...mapState(['personList'])
        firstPersonName() {
            // 如果不用简写形式，自己书写的话，又是另外一种书写方式
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            // console.log(personObj)
            this.$store.commit('personAbout/ADD_PERSON', personObj)
        },
        addWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('personAbout/addPersonWang', personObj)
            this.name = ''
        }
    }
}
</script>