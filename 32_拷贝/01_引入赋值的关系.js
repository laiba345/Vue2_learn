const info = {
    name: 'why',
    age: 18,
    friend: {
        name: 'kobe'
    },
    running() {

    }
}

// 1、操作1:引用赋值
const obj1 = info

// 2、操作2: 浅拷贝
const obj2 = { ...info }
// obj2.name = 'james'
obj2.friend.name = 'james'
// console.log(info.name)
// console.log(info.friend.name) // 'james'

const obj3 = Object.assign( {}, info ) // 同上

// 3、上面的对于某些引用对象的修改还是会影响别的，就需要用到深拷贝
// 引用对象的修改会影响到别的对象中的内容，需要使用到深拷贝
// 深拷贝 - 长得完全相等，但是是完全独立的的引用，和之前半毛钱关系都没有了
// 目前js中没有什么方法可供调用，
// 3.1 JSON方法 -- JSON.stringify() -> 字符串  JSON.parse() -> 对象
// 但是该方法有局限 --- 对info对象里面的内容格式有所限制
const obj4 = JSON.parse(JSON.stringify(info))

console.log(obj4.friend)



