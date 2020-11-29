// never 类型用于描述错误或者死循环

function errorHandler ():never {
  throw new Error('sadfasdfsa')
}

function whileHandler ():never {
  while (true) {
    console.log(1)
  }
}