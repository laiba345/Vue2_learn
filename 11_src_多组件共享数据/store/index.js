// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 准备actions -- 用于响应组件中的动作
const actions = {
    // 第一个参数：miniStore
    /* jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    }, */
    jiaOdd(context, value) {
        // 业务逻辑只能书写在 actions当中
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    }, 
    
}

// 准备mutaions -- 用于操作数据（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }, 
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备state -- 用于存储数据
const state = {
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject: '前端',
    personList: [
        { id: '001', name: '张三' }
    ]
}

// 准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// // 创建store
// const store = new Vuex.Store({
//     actions, 
//     mutations, 
//     state
// }) 

// // 暴露一个内容，我们一般用的就是默认暴露
// // 导出store
// export default store

Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

