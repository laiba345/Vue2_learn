// 1、普通函数
function foo() {}

// 2、生成器函数
function* foo() {}

// 3、异步函数 --- async
async function foo() {
    console.log('foo function1')
    console.log('foo function2')
    console.log('foo function3')
}

// 异步函数的几种写法
const bar = async function() {}
const baz = async () => {}  // 箭头函数

class Person {
    async running() {
        
    }
}

foo() 