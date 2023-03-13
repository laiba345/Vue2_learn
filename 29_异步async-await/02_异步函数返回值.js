// 返回值区别

// 1、普通函数
function foo1() {
    return 123
}

foo1()

// 2、异步函数 --- 直接
async function foo2() {
    // 1、返回一个普通的值 --- 也会被当作Promise对象
    // 异步函数async中，直接返回的就是一个Promise对象
    // --> Promise.resolve(321)
    // return 321

    // 2、返回一个Promise  --- 使用返回的新的Promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('aaa') // 通过.then来获取到相应的结果
    //     }, 1000);
    // })

    // 3、返回一个thenable 对象 (了解)
    return {
        then: function(resolve, reject) {
            resolve('bbb')
        }
    }
}

// 此处的then就是为了  
foo2().then(res => {
    console.log('res:', res)
}) 