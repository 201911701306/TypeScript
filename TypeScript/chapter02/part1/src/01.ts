class Person {
    /* readonly name: string = 'laosj'
    static age: number = 18 */

    name = '孙挖'
    age = 18

    say() {
        console.log('helo');

    }

}

const per = new Person()

console.log(per);
console.log(per.name, per.age);
// console.log(Person.age);

per.say()

