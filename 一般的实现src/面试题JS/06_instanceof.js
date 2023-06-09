/* 
    instanceof运算符
    - 用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
*/
// 实现
function myInstanceof(left, right) {
    // 获取对象的原型
    let proto = Object.getPrototypeOf(left)
    // 获取构造函数的prototype对象
    let prototype = right.prototype

    // 判断构造函数的prototype对象是否在对象的原型链上
    while(true) {
        if(!proto) return false
        if(proto === prototype) return true

        // 无限制的依次获取原型的原型，一直循环下去
        proto = Object.getPrototypeOf(proto)
    }
}