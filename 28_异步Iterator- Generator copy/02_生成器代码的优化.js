function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 2000);
    })
}

// 发送了一次网络请求
// 发起网络请求，通过.then 操作，如果上面用到new Promise()其中用到的函数
requestData('http://why').then(res => {
    console.log('res:', res)
})
/* 
    方式四、最终代码
    新增的async和await写法，就是为了替换原来promise的写法，很关键
    async/await解决方案
*/
async function getData() {
    // 此处的res1是一个promise对象，要想获得结果就必须.then获取拿到
    const res1 = await requestData('why')
    console.log(res1)
    const res2 = await requestData(res1 + 'kobe') // 依赖上面的结构
    console.log(res2)
    const res3 = await requestData(res2 + 'james')
    console.log(res3)
}

const generator = getData() 
