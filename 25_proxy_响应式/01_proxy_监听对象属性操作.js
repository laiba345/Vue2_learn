// /* 
//     Vue2响应式原理
// */
// // 先创建一个对象
// // 1、先创建一个属性
// const obj = {
//     name: 'why',
//     age: 18,
//     height: 1.88
// }

// // 2、将需要监听的属性取出来
// // 需求：监听对象属性的全部操作  -- 先将需要创建的对象拿出来
// let _name = obj.name

// // 只针对一个属性
// /* 
//     参数一、需要定义属性的对象
//     参数二、需要定义的属性
//     参数三、属性描述符
// */
// /* Object.defineProperty(obj, 'name', {
//     // 其是完全可以监听到的，
//     // set函数有新值 newValue 
//     set(newValue) {
//         console.log('监听：给name设置了新的值', newValue)
//         _name = newValue
//     }, 
//     get() {
//         console.log('监听：获取新的值',)
//         return _name
//     }
// }) */

// // 监听所有属性，遍历所有属性，对每一个属性使用defineProperty
// // 通过Object.keys(obj) 可以获取到所有的属性值
// // Object.keys(obj) -- 可以获取到一个对象的所有属性值
// const keys = Object.keys(obj)
// // console.log(keys)

// for (const key of keys) {
//     // value后面是要进行修改的，通过newValue来修改该value
//     let value = obj[key]

//     Object.defineProperty(obj, key, {
//         set(newValue) {
//             console.log(`监听：给${key}设置了新的值：`, newValue)
//             value = newValue
//         },
//         get() {
//             console.log(`监听：获取${key}的值`)
//             return value
//         }
//     })
// }

// // 第一次测试
// // console.log(obj.name)
// // obj.name = 'kobe'

// // 第二次测试
// console.log(obj.age)
// obj.age = 17
// console.log(obj.age)

// 1、创建一个对象
const obj = {
    name: 'kang',
    age: 18,
    height: 1.88
}

// 2、将要检测的对象表示出来
let value = obj.name

// 3、使用函数进行检测
Object.defineProperty(obj, 'name', {
    set(newValue) {
        console.log("属性被修改了")
        value = newValue
    }, 
    get() {
        console.log("属性被读取了")
        return value
    }
})

console.log(obj.name)
obj.name = 'huang'
console.log(obj.name)
