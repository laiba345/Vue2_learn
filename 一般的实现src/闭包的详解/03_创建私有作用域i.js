/* 
    方法一
    - 自定义属性
*/
for (let i = 0; i < 10; i++) {
    input[i].myIndex = i
    input[i].onclick = function () {
        alert(this.myIndex)
    }
}

/* 
    方法二
    - let变量
*/
var len = inputs.length
for (let i = 0; i < 10; i++) {
    inputs[i].onclick = function () {
        alert(i)
    }
}