class User {
    name = "" // public property
    #email = "" // privat property

    constructor(name, email) {
        this.name = name
        this.#email = email
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }

    getEmail() {
        console.log(`${this.#email}`);
    }
}

const user = new User("David", "david@gmail.com") // create object with class
const user2 = new User("Frangky", "frangky@gmail.com")

console.log(user.name);
user.getEmail()

user.greeting()
user2.greeting()

// static properti
class Circle {
    static PI = 3.14

    static circleArea(r) {
        return this.PI * r * r
    }
}

console.log(Circle.PI); // akses langsung dari class
console.log(Circle.circleArea(5))