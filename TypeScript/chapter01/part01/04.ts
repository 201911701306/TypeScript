//a只能用来表示一个对象
let a: object

//用来指定对象中可以包含哪些属性
//属性后边加上？表示属性是可选的
let b: {
    name: string,
    age?: number
}

b = {
    name: '5',
    // age:4
}

//any 表示任意类型的属性
let c: {
    name: string,
    [propName: string]: any
}

c = {
    name: 'sdfa',
    adfaf: 64,
    asdfa: 54
}

let d: (a: number, b: number) => number
d = function (n1: number, n2: number) {
    return n1 + n2
}

let e: string[]

e = ['a', 'b', 'c']

let f: number[]

let g: Array<number>
g = [1, 2, 3]

let h: [string, string]


//enum 枚举
enum Gender {
    Male = 0,
    Man = 1
}


let i: { name: string, gender: 0 | 1 }
i = {
    name: '456',
    gender: Gender.Male
}

console.log(i.gender == Gender.Male);

//既要有name，又要有age
let j: { name: string } & { age: number }

j = {
    name: '455sdf',
    age: 18
}

type myType = 1 | 2 | 3 | 4 | 5
let k: 1 | 2 | 3 | 4 | 5
let p: myType

k = 3