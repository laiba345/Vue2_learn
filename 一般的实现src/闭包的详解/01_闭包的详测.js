function fn() {
    var a = 66
    return function() {
        console.log(a)
    }
}