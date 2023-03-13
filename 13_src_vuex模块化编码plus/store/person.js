// 发送axios
import axios from 'axios'
import { nanoid } from 'nanoid'

// 和人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        // 业务逻辑
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('输入的人必须姓王！')
            }
        },
        addPersonServer(context) {
            // axios可以很好的发送请求
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    // 点then后面返回response和error
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            // 此处的value是需要操作的对象
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}