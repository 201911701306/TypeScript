(function () {
    class Person {
        public name: string
        private age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        /* getName() {
            return this.name
        }

        setName(name: string) {
            this.name = name
        }
        getAge() {
            return this.age
        }
        setAge(age: number) {
            if (age <= 0) {
                console.log('no');

            } else {
                this.age = age
            }
        } */


        get _age(): number {
            return this.age
        }


        set _age(v: number) {
            this.age = v;
        }


    }

    class A {
        public num: number

        constructor(num: number) {
            this.num = num
        }
    }
    const per = new Person('孙卫东', 8)
    const a = new A(1)
    console.log(per);
    // per.age = -38
})()
