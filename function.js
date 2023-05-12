// function declaration 
function square(number) {  // hoisting
    return number * number
}

// function expresion
const square2 = function(number) {
    let hasil = number * number
    return hasil
}

const x = square(4) // 16
const y = square2(5) // 25

// console.log(x);
// console.log(y);

function sumNumber (number1, number2) {
    return number1 + number2
}

console.log(sumNumber(10, 5));

function multiply(a, b = 1) { // default parameters
    return a * b
}

// console.log(multiply(3, 2));
// console.log(multiply(3));

function myFunc(a, b, ...arg) { // rest parameters
    console.log(a);
    console.log(b);
    console.log(arg);
}

// myFunc(1, 2, 3, 4, 5, 6, 7, 8)

// nested function
function getMassage(firstname) {
    function sayHello() {
        return "Hello " + firstname + "."
    }

    function welcomMessage() {
        return "Welcome to Purwadhika"
    }

    return sayHello() + " " + welcomMessage()
}

const message = getMassage("David")
console.log(message);

// closure function ~ membungkus lingkup variable dan function dalam satu kesatuan
function greeting(name) {
    const defaultMessage = "Hello "
    return function() {
        return defaultMessage + name
    }
}

const greetingDavid = greeting("David")
console.log(greetingDavid());

console.log(greeting("David")());

// currying function ~ membagi function menjadi subfunction
function multiplier (factor) {
    return function (number) {
        return factor * number
    }
}

// const mul3 = multiplier(3)
// console.log(mul3(4));

console.log(multiplier(4)(2));

// recursive function ~ function yang memanggil dirinya sendiri
function contDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1

    if (nextNumber > 0) {
        contDown(nextNumber)
    }
}

contDown(3)

// arrow function
const square3 = (number) => number * number
console.log(square3(5));