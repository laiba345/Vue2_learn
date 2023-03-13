/* 
    模拟异步请求的方式
*/
function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(url)
            // 也有可能等待的最终结果是reject
            reject('error message')
        }, 2000);
    })
}

async function getData() {
    // 处理之前的写法，因为await就会等待Promise处理的结果 --- await会等待Promise处理的结果
   /*  const res1 = await requestData('why')
    console.log('res1:', res1)
    const res2 = await requestData(res1 + 'kobe')
    console.log('res2:',res2) */

    // 如果收到reject，也可以在此处自己捕获异常
    // 自己使用try...catch来进行捕获异常的操作
    try{
        const res1 = await requestData('why')
        console.log('res1:', res1)
        const res2 = await requestData(res1 + 'kobe')
        console.log('res2:',res2)
    }catch(error) {
        console.log('捕获到异常代码:', error)
    }
}

getData() 
// 如果有异常的话，可以在此处进行catch操作
// getData().catch(err => {
//     console.log('err', err)
// })