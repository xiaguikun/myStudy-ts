//! 问题：给定义对象，我要求你根据对象的值输出它的属性 
    // const obj2 = {
    //   a:1,
    //   b:2
    // }

    // obj2.a                  
    // for(let key in obj2) {
    //   if (obj2[key] == 1) {
    //     console.log('key',key)
    //   }
    // }

//! ts解决
//! 枚举变量名大驼峰
enum Color {Red = 1, Green, Blue}
// enum Color {Red = 1, Green = 2, Blue = 3}

let c:Color = Color.Green  // 1
// console.log(c)
let s:string = Color[2]
console.log('s',s)