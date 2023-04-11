let obj1 = {
    x: 100
}
let obj2 = {
    y: 200
}

Object.defineProperty(obj2, 'x', {
    get() {
        console.log('获取内容')
        return obj1.x
    }, 
    set(newValue) {
        console.log("设置内容")
        obj1.x = newValue
    }
})

// 肯定没有任何反应，因为我们监视的是obj2
// obj1.x = 300
// 有的内容可以监视到，没有的内容同样可以全部监视到
obj2.x = 300
console.log(obj1.x)

