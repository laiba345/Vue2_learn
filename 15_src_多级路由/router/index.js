// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 在下面创建了路由，这上面肯定需要引入相应的组件
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Message from '../components/Message'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 多级路由的跳转操作，通过children属性来控制跳转
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
    ]
})