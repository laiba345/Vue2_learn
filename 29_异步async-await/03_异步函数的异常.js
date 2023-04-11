/* 
    一个普通的异步函数的执行流程

    什么情况下异步函数的结果是rejected -- 
    - 如果异步函数中有抛出异常（产生了错误），这个异常不会立即被浏览器处理
        
    - 会进行如下处理：Promise.reject(error)

*/
async function foo() {
    console.log('-----1')
    console.log('-----2')
    console.log('-----3')

    // 'abc'.filter() // 因为字符串是没有这种方法的，只有数组有这个方法  异步函数会抛出异常
    // 也可以自己抛出错误，可以用catch进行接收操作
    throw new Error('HK make a error')

    return 123
}
// promise => pending => fulfilled/rejected
foo().then(res => {
    console.log('res', res)
}).catch(err => {  // 通过catch来捕获错误 throw 或者 reject
    console.log('err', err)

    console.log('继续执行其他代码') // 
    // console.log(foo())
})
