var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
        console.log('constructor');
    }
    Dog.prototype.bark = function () {
        console.log('wangwang');
    };
    return Dog;
}());
var dong = new Dog('dong1', 18);
var dong1 = new Dog('dong2', 25);
var dong2 = new Dog('dong3', 28);
console.log(dong);
