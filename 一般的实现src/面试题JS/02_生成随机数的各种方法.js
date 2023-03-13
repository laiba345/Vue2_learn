 /* 
     一、随机浮点数的生成
     - 生成[0, 1)范围内的随机数
     - 使用random() 方法可以返回一个介于 0～1 之间的伪随机数
 */

 // console.log(Math.random())
 
 /* 
     二、生成[n, m) 范围内的随机数
     - 使用公式：Math.random() * (m - n) + n
     - 生成[10, 15) 内的随机浮点数
 */
 let random1 = Math.random() * (15-10) + 10
 console.log(random1) // 10.989180749249828
 
 