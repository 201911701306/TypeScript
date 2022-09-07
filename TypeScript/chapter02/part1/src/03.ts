(function name() {
    class Animal {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        say() {
            console.log('animals');

        }
    }

    class Dog extends Animal {


        say() {
            console.log('dogdog');
        }
    }

    class Cat extends Dog {
        say() {
            console.log('miaomiao');
        }

        run() {
            console.log(`${this.name}在跑`);

        }
    }

    const dog = new Dog('fongagsd', 456)

    dog.say()

})()