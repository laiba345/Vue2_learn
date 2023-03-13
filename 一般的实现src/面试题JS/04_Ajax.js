/* 
    Ajax 
        - Asynchronous JavaScript and XML
        - 通过 JavaScript 的异步通信
        - 从服务器获取XML文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页，
    
    具体来说，AJAX包括以下几个步骤
    1、创建XMLHttpRequest对象，也就是创建一个异步调用对象
    2、创建一个新的HTTP请求，并指定该HTTP请求的方法、URL及验证信息
    3、设置响应HTTP请求状态变化的函数
    4、发送HTTP请求
    5、获取异步调用返回的数据
    6、使用JavaScript和DOM实现局部刷新
*/

// import { reject } from "core-js/fn/promise"

// 代码实现
const SERVER_RUL = "/server"

let xhr = new XMLHttpRequest()

// 创建HTTP请求
xhr.open("GET", SERVER_RUL, true)

// 设置状态监听函数
xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return

    // 当请求成功时
    if (this.status === 200) {
        handle(this.response)
    } else {
        console.error(this.statusText)
    }
}

// 设置请求失败时的监听函数
xhr.onerror = function () {
    console.error(this.statusText)
}

// 设置请求头信息，其实设置或不设置都是无所谓的
xhr.responseType = "json"
xhr.setRequestHeader("Accept", "application/json")

// 发送Http请求
xhr.send(null)

// 区别于上方 - 通过promise封装实现
function getJSON(url) {
    // 创建一个Promise对象来进行封装实现
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()

        // 新建一个http请求
        xhr.open("GET", url, true)

        // 设置状态的监听函数
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return

            // 当请求成功或失败时，改变promise的状态
            if (this.status == 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }

        // 设置错误监听函数
        xhr.onerror = function() {
            reject(new Error(this.statusText))
        }

        // 设置响应的数据结构
        xhr.responseType = 'json'

        // 设置请求头信息
        xhr.setRequestHeader("Accept", "application/json") 

        // 发送http请求
        xhr.send(null)
    })
    return promise
}

