const obj:Obj = {
  id: 1,
  name: 'lakers'
}

// 问题 : 被占用了
// ts解决     接口 / type 

//! 定义接口
// interface Obj{  // 接口的名称用大驼峰形式
//   readonly id: number, // 只读属性
//   name: string,
//   b?: number,//可选属性
//   [propName:string]: any  // 任意属性  any任意类型
// }

//! type来定义类型
type Obj = {  // 接口的名称用大驼峰形式
  readonly id: number, // 只读属性
  name: string,
  b?: number,//可选属性
  [propName:string]: any  // 任意属性  any任意类型
}
obj.b = 100

obj.company = '千锋'