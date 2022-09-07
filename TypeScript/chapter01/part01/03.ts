
//可以使用| 来连接多个类型
let b: "male" | "man"
b = 'male'
b = 'man'

//联合类型
let c: boolean | string

//任何类型，一个变量设置为any后相当于关闭了ts对于该变量的类型检测
//在ts不建议使用any
//只声明不指定类型，则自动判断为any，隐式的any
//any类型可以赋值给任意变量，不受语法检测的影响
let d

//表示未知的类型
//unknown则要求一致的类型，与any不一样
//算是一个类型安全的any
//如果一定要赋值，可以先做一个if判断
let e: unknown
e = 10
e = 'saefas'

let s: string


//类型断言，可以用来告诉解析器变量的实际类型

s = e as string
s = <string>e

//函数不能有返回值，但是可以有undefined，null等
function fn(): void {

}

//什么返回值都不能有
//一般用来函数报错
function fn2():never {
    throw new Error("faild");
    
}