class Dog {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        console.log('constructor');

    }

    bark() {
        console.log(this.name);

    }
}

const dong = new Dog('dong1', 18)
const dong1 = new Dog('dong2', 25)
const dong2 = new Dog('dong3', 28)

console.log(dong);
