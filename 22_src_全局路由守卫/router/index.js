// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 在下面创建了路由，这上面肯定需要引入相应的组件
import About from '../components/About'
import Home from '../components/Home'
import News from '../components/News'
import Message from '../components/Message'
import Detail from '../components/Detail'

// 创建并暴露一个路由器  
// 这里就不能对其进行直接暴露的操作，要不然来不及进行相关操作
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    // 通过meta来配置路由元信息
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            // 对于params参数，我们需要进行占位符操作
                            // path: 'detail',
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            meta: { title: '详情' }, 

                            // 谁接受东西/谁接受数据，就往谁那里书写相关的配置即可
                            /* 
                                props的第一种写法
                                值为对象
                                该对象中所有key-value都会以props的形式传给Detail组件
                                在组件中进行接收的时候，属性需要用到字符串接收
                                *** 用的非常少，因为里面的数据基本都是死数据
                            */
                            /* props: {
                                a: 1,
                                b: 'hello'
                            } */

                            /* 
                                props的第二种写法
                                值为布尔值
                                若布尔值为真
                                就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                                *** 还是有缺陷的，因为query被忽略了
                            */
                            // props: true,

                            /* 
                                props的第三种写法
                                值为函数
                                -- 我们要想拿到想要的东西，关键就是需要获取到$route
                            */
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }

                            // 也可以用解构赋值的写法
                            /* props({ query }) {
                                return { id: query.id, title: query.title }
                            } */

                            // 甚至于使用解构赋值的连续写法  但是语意不是很明显
                            /* props({query:{id, title}}) {
                                return {id, title}
                            } */
                        }
                    ]
                }
            ]
        },
    ]
})

// 全局前置路由守卫  --- 初始化的时候 + 每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // console.log('a')
    // next()
    // 除了用to.path进行判断，还可以使用to.name 进行相关判断操作
    // if (to.path === '/home/news') {
    // 属性meta中可以配置很多内容，用于判断能够进入相应的属性
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不对，无权查看')
        }
    } else {
        next()
    }
})


// 后置路由守卫 --- 初始化的时候 + 每次路由切换之后被调用
router.afterEach((to, from) => {
    // 切换完了，直接进行相应的修改操作即可
    // 前面有就用前面的，前面没有就用后面的 这就是|| 的作用
    document.title = to.meta.title || '硅谷系统'
})


export default router