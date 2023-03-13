<template>
    <div>
        <ul>
            <li>消息编号:{{ id }}</li>
            <li>消息标题:{{ title }}</li>
        </ul>
        <!-- porps第一种写法测试 -->
        <!-- <h3>{{ a }}</h3>
        <h3>{{ b }}</h3> -->
    </div>
</template>

<script>
export default {
    name: 'Detail',
    // props:['a', 'b'], 第一种写法测试
    props: ['id', 'title'],
    mounted() {
        // console.log(this.$route)
    }
};
</script>