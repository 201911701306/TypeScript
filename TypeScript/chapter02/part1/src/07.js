(function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var per = new Person('孙卫东', 8);
    console.log(per);
})();
