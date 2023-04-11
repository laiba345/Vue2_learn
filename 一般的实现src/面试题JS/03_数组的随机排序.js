/* 
    1、使用数组 sort 方法对数组元素随机排序，
    让 Math.random() 出来的数与 0.5 比较，
    如果大于就返回 1 交换位置，如果小于就返回 -1，不交换位置。
*/  
// function randomSort(a, b) {
//     return Math.random() > 0.5 ? -1 : 1
// }

// import { random } from "core-js/core/number"

/* 
    2、随机从原数组中抽取一个元素，加入到新数组
*/
// function randomSort(arr) {
//     const result = []

//     while(arr.length > 0) {
//         let randomIndex = Math.floor(Math.random() * arr.length)
//         // console.log(randomIndex)
//         // 每次将结果放到result中
//         result.push(arr[randomIndex])
//         arr.splice(randomIndex, 1) // 这种方法会改变原始数组
//         // console.log(arr)
//     }
//     return result
// }

// randomSort([1, 5, 3])

/* 
    3、随机交换数组内元素【类似洗牌算法】
*/
// function randomSort(arr) {
//     let index, randomIndex, temp, len = arr.length

//     for(index = 0; index < len; index++) {
//         randomIndex = Math.floor(Math.random() * (len - index)) + index

//         temp = arr[index]
//         arr[index] = arr[randomIndex]
//         arr[randomIndex] = temp
//     }
//     return arr 
// }

// console.log(randomSort([1, 23, 5, 4, 20]))

// ES6
function randomSort(arr) {
    let length = arr.length
    if(!Array.isArray(arr) || length <= 1) return 
    for(let index = 0; index < arr.length; index++) {
        // 如果下面语句死[]开头，则该句式结束以后要加上分号
        // 也是用于随机获取下标的操作，然后在进行互换下标的操作
        let randomIndex = Math.floor(Math.random() * (length - index)) + index;
        // 赋值交换
        [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]]
    }
    return arr
}

let arrResult = randomSort([1, 3, 5, 6])
console.log(arrResult)
