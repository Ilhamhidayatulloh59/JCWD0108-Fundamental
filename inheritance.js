class Human {
    gender = ""
    constructor (gender) {
        this.gender = gender
    }
}

class PersonMale extends Human {
    name = ""
    age = ""
    constructor(name, age) {
        super("Male")
        this.name = name
        this.age = age
    }
}

class PersonFemale extends Human {
    name = ""
    age = ""
    constructor(name, age) {
        super("Female")
        this.name = name
        this.age = age
    }
}

const person1 = new PersonMale("David", 20)
const person2 = new PersonFemale("Alice", 20)

console.log(person1);
console.log(person1 instanceof Human);
console.log(person2 instanceof Human);