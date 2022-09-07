(function () {
    class Person {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        say() {
            console.log('123');

        }
    }

    class Student extends Person {
        num: number

        constructor(name: string, age: number, num: number) {
            super(name, age)
            this.num = num
        }
        say() {
            super.say()
        }
    }

    const p = new Student('11', 45, 105)
    p.say()

})()