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
                <span v-show="!todo.isEdit">{{ todo.title }}</span>
                <!-- 通过ref来打标签，用来获取相关的内容 -->
                <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                    ref="inputTitle">
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo'],
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
            // this.checkTodo(id)

            // 全局事件总线处理
            this.$bus.$emit('checkTodo', id)
        },
        handleDelete(id) {
            if (confirm('确定删除吗?')) {
                // console.log(id)
                // 通知APP删除对应的删除id的对象
                // this.deleteTodo(id)

                // 全局事件总线
                // this.$bus.$emit('deleteTodo', id)

                // 消息订阅与发布
                pubsub.publish('deleteTodo', id)
            }
        },
        // 编辑
        handleEdit(todo) {
            // todo.isEdit = true  如此书写是没有 响应式的
            // this.$set(todo, 'isEdit', true)
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                // 添加一个响应式数据，使用this.$set() 
                this.$set(todo, 'isEdit', true)
            }
            // Vue：先统计改了几个地方，然后再重新解析模板
            // this.$refs.inputTitle.focus() 
            // 也可以用延时定时器
            /* setTimeout(() => {
                this.$refs.inputTitle.focus()
            }, 200); */

            // 在 下一次 DOM更新结束后执行其指定的回调
            // 什么时候用：当改变数据后，要基于更细后的新DOM进行某些操作时，要在nextTick所指定的回调中执行
            this.$nextTick(function() {
                this.$refs.inputTitle.focus() 
            })
        },
        // 失去焦点回调，真正修改逻辑
        handleBlur(todo, e) {
            todo.isEdit = false
            if (!e.target.value.trim()) return alert('输入不能为空')
            // 需要拿到最新的输入值  
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
            // console.log(todo.id, e.target.value)
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

li:hover {
    background-color: #ccc;
}

li:hover button {
    display: block;
}
</style>