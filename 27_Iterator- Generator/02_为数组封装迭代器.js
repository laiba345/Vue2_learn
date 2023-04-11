const names = ['abc', 'cba', 'nba']
const nums = [100, 24, 55, 66, 86]

// 封装一个函数 --- 要服务多个数组内容时，可以构建一个函数
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function() {
            //
            if(index < arr.length) {
                return { done: false, value: arr[index++] }
            }else {
                return { done: true }
            }
        }
    }
}

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
