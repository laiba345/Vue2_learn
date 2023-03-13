function f1() {
    var n = 999
    nAdd = function () {
        console.log(n += 1)
    }
    function f2() {
        console.log(n)
    }
    return f2
}

var result = f1()
result() // 999
nAdd() // 1000
result() // 1000