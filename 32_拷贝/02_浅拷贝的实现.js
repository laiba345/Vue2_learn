function shallowCopy(object) {
    // 只拷贝对象
    if(!object || typeof object !== "object") return 

    // 根据object的类型判断 是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {}

    // 遍历object 并判断是object的属性才拷贝
    for(let key in object) {
        if(object.hasOwnProperty(key)) {
            // 浅拷贝
            newObject[key] = object[key]
            // 深拷贝
            newObject[key] = deepCopy(object[key])
        }
    }
    return newObject
}