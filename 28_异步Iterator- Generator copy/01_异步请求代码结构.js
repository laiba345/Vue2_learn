function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 2000);
    })
}

// 发送了一次网络请求
// 发起网络请求，通过.then 操作，如果上面用到new Promise()其中用到的函数
// 上面的函数是一个Promise对象，我们在返回的时候通过.then来进行解析操作
requestData('http://why').then(res => {
    console.log('res:', res)
})

/* 
    需求：
    1、发送一次网络请求，等到这次网络请求的结果
    2、发送第二次网络请求，等待这次网络请求的结果
    3、发送第三次网络请求，等待这次网络请求的结果
*/
// 方式一：层层嵌套() 代码阅读性差 --- 回调地狱 callback hell
/* function getData() {
    // 第一次请求
    requestData('why').then(res1 => {
        console.log('第一次结果:', res1)
        // 第二次请求
        requestData(res1 + 'kobe').then(res2 => {
            console.log('第二次结果:', res2)
            // 第三次请求
            requestData(res2 + 'james').then(res3 => {
                console.log('第三次结果', res3)
            })
        })
    })
} */

/* function getData() {
    requestData('why').then(res1 => {
        console.log('第一次结果是:', res1)
        // return res1 // return 出来的res1作为下一个then的输入
        // 将得到的结果，返回即可，，
        return requestData(res1 + 'kobe') // 此处返回的内容会作为下一次.then 的参数进行传入操作
    }).then(res2 => {
        console.log('第二次结果是:', res2)
        return requestData(res2 + 'james')
    }).then(res3 => {
        console.log('第三次结果是:', res3)
    })
}
 */

// 方式三、最终代码
/* function* getData() {
    // 此处的res1是一个promise对象，要想获得结果就必须.then获取拿到
    // 其中yield返回的也是一个promise对象，需要.then 来进行解析
    const res1 = yield requestData('why') 
    console.log(res1)
    const res2 = yield requestData(res1 + 'kobe') // 依赖上面的结果
    console.log(res2)
    const res3 = yield requestData(res2 + 'james')
    console.log(res3)
}

const generator = getData() 
// console.log(generator.next())

generator.next().value.then(res1 => {
    generator.next(res1).value.then(res2 => {
        generator.next(res2).value.then(res3 => {
            generator.next(res3)
        })
    })
})
 */

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
