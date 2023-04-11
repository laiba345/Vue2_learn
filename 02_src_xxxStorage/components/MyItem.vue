<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
                <!-- shift + command + return 向上弄 -->
                <!-- 
                    如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props
                 -->
                <!-- <input type="checkbox" v-model="todo.done" /> -->
                <span>{{ todo.title }}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        </li>
    </div>
</template>

<script>

export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo', 'checkTodo', 'deleteTodo'],
    data() {
        return {

        };
    },

    mounted() {
        // props接收到父组件传来的数据，也可以直接使用
        // console.log(this.todo)

    },

    methods: {
        // 勾选 or 取消勾选
        handleCheck(id) {
            // 传值的时候，直接进行简单的传递即可
            // console.log(id)
            // 通知APP组件，将对应的todo对象的done值取反
            // 勾选 ｜ 取消勾选 决定的是done值，通过传入id来进行实现
            this.checkTodo(id)
        },
        handleDelete(id) {
            if(confirm('确定删除吗?')) {
                // console.log(id)
                // 通知APP删除对应的删除id的对象
                this.deleteTodo(id)
            }
        }
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid rgb(171, 111, 111);
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background-color: #ccc;
}

li:hover button {
    display: block;
}
</style>