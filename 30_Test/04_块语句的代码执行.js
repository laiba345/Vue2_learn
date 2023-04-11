var a = 1
{
    function a() {}
    a = 2
    function a() {}
    a = 3
    function a() {}
    a = 4
    console.log('内部a:', a) // 4
}
console.log('外部a:', a)  //3