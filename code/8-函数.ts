//! 1. 函数的什么需要定义类型: 参数 + 返回值
function total (a:number,b:number):number {
  return a + b 
}

const fn = (a:string,b:number):string => {
  return a + b
}

const fn1 = ():void => {  // void表示空类型
  console.log('fn1')
}

const fn2 = (a:number,b:number):number => a + b 

const fn3:(a:number,b:number)=>number = (a,b) => a + b

//! 最常用写法  ---------  type/interface来定义函数类型
const fn4:Fn = (a,b) => a + b
// interface Fn {
//   (a:number,b:number):number
// }
type Fn = {
  (a:number,b:number):number
}
