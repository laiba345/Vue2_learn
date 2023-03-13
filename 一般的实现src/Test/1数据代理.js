let number = 19
let person = {
    name: '张三',
    sex: '男',
    // age: 18
}
// 该方法有三个参数
// 
Object.defineProperty(person, 'age', {
    // value: 18,
    // enumerable: true, //控制属性是否可以枚举，默认值是false
    // writable: true, // 控制属性是否可以修改，默认值是false
    // configurable: true, // 控制属性是否可以删除，默认值是false

    // 当有人读取person的age属性时，get函数就会被调用，且返回值是age的值
    get() {
        return 'hello'
    }
})

console.log(Object.keys(person))
console.log(person) 