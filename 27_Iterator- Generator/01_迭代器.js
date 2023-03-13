const names = ['abc', 'cba', 'nba']

// 给数组names创建一个迭代器
let index = 0
const namesIterator = {
    // 对于迭代器主要就是返回一个next函数，next函数返回的是一个对象
    // 对象中有done值和value值
    next: function () {
        // done:Boolean
        // value: 具体值/undefined
        // 情况就是我们需要通过next函数来进行返回
        if(index < names.length) {
            return {
                done: false,
                value: names[index++]
            }
        }else {
            done: true 
            // 不写value的时候默认为undefined
        }
    }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())