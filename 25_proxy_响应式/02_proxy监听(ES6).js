const obj = {
    name: 'why',
    age: 18,
    height: 1.88
}

// 1、创建一个Proxy对象
// 其响应式监听其实和Object.defineProperty() 是很相似的
// 书写形式其实和Object.defineProperty()是很类似的，这一点需要清楚
// 其实就是参数的形式会有所不同
const objProxy = new Proxy(obj, {
    // target：需要监听的对象 key：对象当中的属性值
    get: function (target, key) {
        console.log(`监听：监听${ key }的获取`)
        return target[key]
    }, 
    // 进行set操作里面有个属性值newValue表示修改的新对象
    set: function(target, key, newValue) {
        console.log(`监听：监听${ key }的设置值`, newValue)
        target[key] = newValue
    }
})

// 2、对obj的所有操作，应该去操作objProxy
console.log(objProxy.name) // why
objProxy.name = 'kobe'  // 进行了修改
console.log(objProxy.name) // kobe
objProxy.name = 'james'

/* 
    对于没有的属性，进行设置的话
    也算是一种监听操作，
    返回：
    监听：监听address的设置值 广州市
*/
objProxy.address = '广州市'  