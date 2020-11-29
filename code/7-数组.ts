const arr = [1,2,3,'a']
// 1. 规定数组中只能有number类型数据 
        const arr1:number[] = [1,2,3,4]
        // arr1.push('a')
// 2. 规定数组中只能有string类型数据 
        const arr2:string[] = ['a','b','c']

// 3. 规定数组中既可以是string也可以是number类型数据 
        //! 联合类型
        const arr3:(number|string|boolean)[] = [1,2,'a','b',true]

// 4. 如何使用内置对象类型来定义数组类型  Array
        const arr4:Array<number> = new Array(1,2,3,4)
        const arr5:Array<string> = new Array('a','b')
        const arr6:Array<string|number> = new Array('a','b')
        arr6.push(1)

// 5. 如何定义json类型数组的类型
  const arr7:Arr[] = [
    {
      id: 1,
      task: '任务1'
    },
    {
      id: 2,
      task: '任务2'
    }
  ]

  // type/interface
      // interface Arr{
      //   readonly id: number,
      //   task: string
      // }
      type Arr = {
        readonly id: number,
        task: string
      }