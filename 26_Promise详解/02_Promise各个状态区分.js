// 1、创建一个promise对象

// 内部的回调函数会立即执行，根本不会进行等待操作
const promise = new Promise((resolve, reject) => {
    // 一旦调用resolve就执行.then  一单执行reject就执行 .catch
    // 多次调用只会执行一次,同时调用两个执行上次的内容
    /* 
        注意：
        Promise的状态一单被确定下来，就不会再改变，也不能再执行某一个回调来改变状态
    */
    // 1、待定状态 pending
    console.log('0000')
    // 2、兑现状态
    resolve()
    // 3、拒绝状态
    reject()


}) 

promise.then((value) => {
    console.log('成功的回调')
}).catch((err) => {
    console.log('失败的回调')
})

// 回调函数名字：Executor 里面有两个参数，对应两个状态
const promisePlus = new Promise((resolve, reject) => {

})






