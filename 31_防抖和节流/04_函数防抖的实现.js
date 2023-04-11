/* 
    函数防抖
    - 在事件被触发n秒后再执行回调，
    如果在n秒内事件又被触发，则重新计时
*/
// 函数防抖的实现
function debounce(fn, wait) {
    var timer = null

    return function() {
        // 函数执行上下文弄成this，参数弄成arguments即可
        var context = this, args = arguments
        // 如果此时有定时器，取消之前的定时器重新计时
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        // 设置定时器，使用事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait);
    }
}

function debounce(fn, wait) {
    var timer = null

    return function() {
        // 函数的执行上下文弄成this，参数弄成arguments
        var context = this, args = arguments
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait);
    }
}