<template>
    <div>
        <ul class="todo-main">
            <!-- 顺便将某一个对象传进去即可 -->
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo"
                :deleteTodo="deleteTodo" />
        </ul>
    </div>
</template>

<script>
// 不管怎么样，先搭建好相应的结构
import MyItem from './MyItem.vue';

export default {
    name: 'MyList',
    components: { MyItem },
    // props就存取在vc当中
    props: ['todos', 'checkTodo', 'deleteTodo'],
    data() {
        return {

        };
    },
};
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>