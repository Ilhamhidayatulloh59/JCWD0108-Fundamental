// properties and method
let user = {
    name: "David",
    greet() {
        console.log("Hello!");
    }
}

// console.log(user.name)
// console.log(user['name'])
// user.greet()

// add & delete property
const person = {
    name: "Frengky",
    age: 26,
}

// person.hobby = "coding"
// console.log(person);

// delete person.age
// console.log(person);

// optional chaining
// console.log(person.address?.street);

// accessing key or properties
// console.log(Object.keys(person));

// looping in object
for (const key in person) {
    // console.log(key);
    // console.log(person[key])
    // console.log(`${key} = ${person[key]}`)
}

// getter & setter
let user1 = {
    firstName: "John",
    lastName: "Smith",
    
    set fullName(value) {
        console.log(value);
        const splittedValue = value.split(" ")
        this.firstName = splittedValue[0]
        this.lastName = splittedValue[splittedValue.length - 1]
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

}

// console.log(user1.fullName)
// user1.fullName = 'Alice Cooper Margaret' // ["alice", "Cooper", "Margaret"] ~ SET / SETTER
// console.log(user1.fullName)
// console.log(user1.firstName)
// console.log(user1.lastName)


// destructuring assignment
let [a, b] = [1, 2] // array destructuring
console.log(a);
console.log(b);

const {age, name} = person // object destructuring
console.log(name);
console.log(age);

const {log} = console
log(name)

// spread oprator
const dataOne = [1, 2, 3]
const dataTwo = [4, 5, 6]
const finalData = [ ...dataOne , ...dataTwo]

const objectOne = {
    name: "David"
}
const objectTwo = {
    email: "david@gmail.com"
}

const finalObject = {
    ...objectOne, ...objectTwo
}


// using "this"
const person2 = {
    firstName: "Frangky",
    lastName: "Sihombing",
    greet () {
        console.log(`Hello! ${this.firstName}`);
    }
}

// Object.freeze(person2) // untuk membekukan sebuah object agar tidak bisa di edit, delete & add
// person2.firstName = "Alice"
// delete person2.lastName
person2.hobby = ['coding']
person2.hobby.push('swiming')
console.log(person2);