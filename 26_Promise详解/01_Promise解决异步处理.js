// import count from "13_src_vuex模块化编码plus/store/count";

function execCode(counter) {
    // 创建一个新的Promise对象进行
    const promise = new Promise((resolve, reject) => {
        // 异步任务
        setTimeout(() => {
            // 成功的回调
            if (counter > 0) {
                let total = 0
                for(let i = 0; i < counter; i++){
                    total += i
                }
                resolve(total)
            } else {
                // 失败的回调
                reject(`${counter}有问题`)
            }
        }, 1000);
    })
    // 将promise对象进行返回即可
    return promise
}
/* 
const promise = execCode(100)
// const promise = execCode(-100)


promise.then((value) => {
    console.log('成功有了结果', value)
})

promise.catch((err) => {
    console.log('失败有了错误', err)
}) */

// 上面的书写完全可以用一种方式来书写
// then一定是监听成功的，catch一定是监听失败的
// 有了Promise以后异步代码书写变得更加规范
// 上面的函数返回一个promise对象，在调用的时候，我们是通过.then 和 .catch 来进行相应的解析操作的
execCode(100).then((value) => {
    console.log('成功', value)
}).catch((err) => {
    console.log('失败', err)
})

