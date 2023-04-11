<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'About',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    // 关于路由守卫一个很重要的地方就是需要进行放行操作 next() 
    // 用的也不是很多 
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'atguigu') {
                next()
            } else {
                alert('学校名不对，无权查看')
            }
        } else {
            next()
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        next() 
    }
};
</script>