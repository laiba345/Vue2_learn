let arr = [1, 2, 3]
let num = Number(arr)
console.log(num) // NaN

let a = {}
let b = []

console.log(a.valueOf())
console.log(a.toString()) // [object Object]
console.log(b.toString())
