<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    // props: ['todos', 'checkAllTodo', 'clearAllTodo'],
    props: ['todos'],

    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            /* let i = 0
            this.todos.forEach(element => {
                if(element.done == true) i++
            });
            return i */

            /* 
                reduce 是ES6中对数组进行专门操作的，用于进行条件统计
                    给你一个订单，订单中金额大于10000

                    pre是上一次函数的返回值
                    current是每一个数据项 
            */
            /* const x = this.todos.reduce((pre, current) => {
                console.log('@', pre)
                return pre + (current.done ? 1 : 0)
            }, 0) */
            // 箭头函数往往可以进行省略操作
            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        /* isAll() {
            return this.doneTotal === this.total && this.total > 0
        } */
        isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(value) {
                // console.log('@@@', value)
                // this.checkAllTodo(value)
                // 定义好了自定义事件以后，直接通过$emit()进行简单触发即可
                this.$emit('checkAllTodo', value);
            }
        }
    },
    methods: {
        /* checkAll(e) {
            // 对于事件对象，不同的标签所对应的内容可能不同
            // console.log(e.target.checked)
            this.checkAllTodo(e.target.checked)
        } */
        clearAll() {
            this.$emit('clearAllTodo'); 
        }
    }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>