//! 用接口/type来定义类的类型,这种形式我们称之为: 接口实现类
class App implements AppIF {
  // 构造函数
  constructor () {
  }
  // 实例成员
    public count = 0 //   实例属性
    public fn (a,b) {return a+b} //   实例方法
    // 存储器 
    get doubleCount () {
      return this.count * 2
    }
    set newCount (val) {
      this.count = val
    }
  // 类成员
    static msg:string = 'Hello'  //   静态属性
    static handler () {} //   静态方法
  // 私有成员
    private sfq:number = 20000 // 私有属性
    private fun () {}  // 私有方法
}



// interface AppIF {
//   // 只能定义实例成员的数据类型
//   count: number,
//   fn: (a:string,b:number) => string,
//   doubleCount: number,
//   newCount: (val:string) => any
// }

type AppIF = {
  // 只能定义实例成员的数据类型
  count: number,
  fn: (a:string,b:number) => string,
  doubleCount: number,
  newCount: (val:string) => any
}