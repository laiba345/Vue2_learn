<template>
    <div>
        <h2>效果一:显示TODO列表时,已完成的TODO为绿色</h2>
        <!-- 子组件：数据来源于父组件 -->
        <List :todos="todos">
            <!-- 子组件决定不了结构与外观，需要父组件来决定 -->
            <!-- 父组件来给子组件传结构 -->
            <!-- 在子组件中占了一个坑，使用slot-scope来对该坑进行填补操作 -->
            <template slot-scope="todo">
                <!-- 书写相应的行内样式来决定最后结果 -->
                <span :style="{ color: todo.todo.isComplete ? 'green' : 'red' }">{{ todo.todo.text }}</span>
            </template>
        </List>
        <hr>
        <h2>效果二:显示TODO列表时,带序号,TODO的颜色为蓝绿搭配</h2>
        <List1 :todos="todos">
            <!-- 既然是对象，必须保证kv是一致的，这一点很关键 -->
            <template slot-scope="{ todo, $index }">
                <span :style="{ color: todo.isComplete ? 'yellow' : 'blue' }"> {{ $index }} --- {{ todo.text }}</span>
            </template>
        </List1>
    </div>
</template>

<script>
import List from './List.vue'
import List1 from './List1.vue'
export default {
    name: 'ScopeSlotTest',
    data() {
        return {
            // 父组件中的数据
            todos: [
                // 数组里面有4个对象
                { id: 1, text: 'AAA', isComplete: false },
                { id: 2, text: 'BBB', isComplete: true },
                { id: 3, text: 'CCC', isComplete: false },
                { id: 4, text: 'DDD', isComplete: false },
            ]
        };
    },
    components: {
        List,
        List1
    }
};
</script>