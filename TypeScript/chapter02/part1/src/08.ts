function fn<K, Y>(a: K, b: Y) {
    return {
        a,
        b
    }
}

let res = fn(10, 'dsa')

let result = fn<string, number>('hello', 41230)

class MyClass<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}















