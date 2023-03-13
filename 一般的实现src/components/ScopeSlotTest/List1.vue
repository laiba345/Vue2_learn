<template>
    <ul>
        <li v-for="(item, index) in todos" :key="index">
            <!-- 子组件是决定不了自己的结构的，需要用到作用域插槽 -->
            <!-- 这一句代码可以让子组件的数据回传给父组件 -->
            <!-- 相当于儿子在这里留了一个坑 -->
            <slot :todo="item" :$index="index"></slot>
            <!-- {{ item.text }} -->
        </li>
    </ul>
</template>

<script>
export default {
    name: 'List',
    // 子组件通过props进行数据的接受
    props: {
        todos: Array,
    }
};
</script>
