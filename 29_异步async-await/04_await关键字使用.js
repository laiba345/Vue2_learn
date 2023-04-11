/* 
    新的关键字：await
    - await条件：必须在异步函数中使用
*/
function bar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123)
        }, 5000);
    })
}
// 其实就是生成器 + promise的一种语法
async function foo() {
    // await 123
    console.log('-----')
    const res = await bar() // await可以将一个promise对象解析出来
    console.log('await后面的代码' ,res)
    console.log('+++++')
}

foo() 