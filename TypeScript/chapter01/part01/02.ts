//声明一个变量a，同时指定他是一个number
let a: number
//a的类型是number，在以后的使用中a的值只能是数字

a = 456
//a = 'hello' 会报错，因为a的类型是number，不能赋值字符串

let b: string
b = '456'

let c: boolean = true


function sum(a: number, b: number):number {
    return a + b 
}


console.log(sum(123,45456));
