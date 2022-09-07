(function () {
    abstract class Person {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        say() {
            console.log('123');

        }
        abstract run(): void
    }

    class Student extends Person {

        say() {
            super.say()
        }

        run(): void {
            console.log(`${this.name}再跑`);

        }
    }

    const p = new Student('11', 45)
    p.say()

})()