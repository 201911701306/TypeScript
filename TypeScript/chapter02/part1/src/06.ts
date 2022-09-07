(function () {
    type myType = {
        name: string
        age: number
    }

    interface myInterface {
        name: string
        age: number
    }
    interface myInterface {
        name: string
        age: number
        gender: string
    }

    const obj: myType = {
        name: 'sss',
        age: 11
    }
    const obj2: myInterface = {
        name: 'sss',
        age: 11,
        gender: '男'
    }

    //接口只定义对象的结构，而不能有实际的值
    interface myInter {
        name: string
        sayHello(): void
    }

    class myClass implements myInter {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(): void {
            throw new Error("Method not implemented.")
        }

    }
})()