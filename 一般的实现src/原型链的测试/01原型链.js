function Fn() {

}

var fn = new Fn()
console.log(Fn.prototype, fn.__proto__)
console.log(Fn.prototype === fn.__proto__)  // true

/* 
    如何给所有实例对象添加方法
    通过原型
*/
Fn.prototype.test = function() {
    console.log('test')

}

fn.test() // test
