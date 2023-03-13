<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'MyHeader',
    // props: ['addTodo'],
    data() {
        return {
            title: ''
        };
    },

    mounted() {

    },

    methods: {
        // 通过事件对象，来获取用户输入的元素
        /* 
            但是使用event事件的话，这样就直接操作了DOM元素
        */
        /* add(event) {
            // 没有内容数据直接return即可
            // if(!event.target.value) return 
            if(!event.target.value.trim()) return alert('输入不能为空！！！')  
            // console.log(event.target.value)
            // 将用户的输入包装成一个todo对象
            const todoObj = { id: nanoid(), title: event.target.value, done: false }
            // console.log(todoObj)
            // 通知APP组件去添加一个todo对象
            this.addTodo(todoObj)
            // 清空输入
            event.target.value = ''
        } */
        add() {
            // 进行数据的简单判断
            if (!this.title.trim()) return alert('输入不能为空！！！')
            // 将用户输入包装成一个todo对象  获取到title以后，包装成一个todo对象比较好
            const todoObj = { id: nanoid(), title: this.title, done: false }
            // 通知APP组件去添加一个todo对象，后面传入的是相应的参数
            this.$emit('addTodo', todoObj);
            // 进一步清空输入
            this.title = ''
        }
    },
};
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
