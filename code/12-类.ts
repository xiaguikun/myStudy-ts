class App {
  // 构造函数
  constructor () {
  }
  // 实例成员
    public count = 0 //   实例属性
    public fn () {} //   实例方法
    // 存储器 
    get doubleCount () {
      return this.count * 2
    }
    set newCount (val) {
      this.count = val
    }
  // 类成员
    static msg = 'Hello'  //   静态属性
    static handler () {} //   静态方法
  // 私有成员 只能在类的内部使用
    private sfq = 20000 // 私有属性
    private fun () {}  // 私有方法
}
class Hello extends App{}

const app = new App()
const hello = new Hello()

hello.count
hello.doubleCount
hello.fn
hello.newCount

app.count
app.fn 
app.doubleCount
app.newCount

App.handler
App.msg