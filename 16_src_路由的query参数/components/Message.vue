<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- <a href="/message1">{{ m.title }}</a>&nbsp;&nbsp; -->
                <!-- <router-link to="/home/message/detail?id=666&title=你好啊！">{{ m.title }}</router-link>&nbsp;&nbsp; -->
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
            </li>
            <hr>
            <!-- 在哪里进行展示，我们也需要清楚的知道 -->
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        };
    },
};
</script>