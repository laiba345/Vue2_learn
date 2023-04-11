const info = {
    friend: ['kobe', 'james', 'curry'],
    // 不按照之前的写法，如何变成一个可迭代对象呢 [] 表示计算属性名
    // 拥有该属性就表示当前是一个可迭代对象  ---  [Symbol.iterator]
    // 为对象添加一个可迭代对象，其实就是在该对象中添加[Symbol.iterator]属性值
    [Symbol.iterator]: function () {
        let index = 0
        const infoIterator = { // 只是对象结构的作用域
            next: () => {  // 改为箭头函数即可
                // done:Boolean
                // value: 具体值/undefined
                if (index < this.friend.length) {
                    return {
                        done: false,
                        value: this.friend[index++]
                    }
                } else {
                    // 都是需要进行返回的，
                    return { done: true }
                    // 不写value的时候默认为undefined
                }
            }
        }
        // 拿到内容以后，肯定需要进行返回操作
        // 将该对象直接进行返回即可
        return infoIterator
    }
}

// 可迭代对象必然具备以下的特点
// 拿到一个函数，执行以后返回的是迭代器
// const iterator = info[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// 可迭代对象 可以进行for...of操作
for(const item of info) {
    console.log(item)
}

// 可迭代对象必然有一个[Symbol.iterator]函数
// 数组是一个可迭代对象
const students = [ '张三', '李四', '王五' ]
console.log(students[Symbol.iterator])
// 打印的就是一个迭代器
console.log(students[Symbol.iterator]())

const iteratorPlus = students[Symbol.iterator]()

// 可以通过迭代器进行遍历操作
console.log(iteratorPlus.next())
console.log(iteratorPlus.next())
console.log(iteratorPlus.next())
console.log(iteratorPlus.next())

// 给数组names创建一个迭代器
// let index = 0
// const infoIterator = {
//     next: function () {
//         // done:Boolean
//         // value: 具体值/undefined
//         if (index < info.friend.length) {
//             return {
//                 done: false,
//                 value: info.friend[index++]
//             }
//         } else {
//             done: true
//             // 不写value的时候默认为undefined
//         }
//     }
// }
// console.log(infoIterator.next())
// console.log(infoIterator.next())
// console.log(infoIterator.next())
