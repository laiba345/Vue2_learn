/* 
    原题
    ['1', '2', '3'].map(parseInt)
*/
// 等同于
const result = ['1', '2', '3'].map((value, index) => {
    // '1' 0
    // '2' 1
    // '3' 2 逢2进1，写3用2进制转换不了，
    return parseInt(value, index) // 1 
})
console.log(result) //[1, NaN, NaN]