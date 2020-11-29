/* 
  泛型
    什么是泛型？ 泛型就是未来类型，定义时不知道是什么类型，只有使用才知道它的类型
*/

function calculateLength<T> (lenth:number,a:T) {
  return a 
}

calculateLength<number>(10,20)
calculateLength<string>(10,'20')

const handler:Fn<number> = a => a 

interface Fn<T>{
  (a:T):T
}