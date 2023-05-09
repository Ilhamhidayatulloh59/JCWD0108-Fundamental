// console.log("Hello World");
// ini catatan
// ini catatan shortcut (ctrl + slice)

/* ini catatan
2 baris atau lebih */

var globalVariable = "Hello World!"
globalVariable = "Hello Bandung"

let replacable = "This value will be replaced"
replacable = "I love javascript" 

const constant = "Hello Purwadhika"

// console.log(globalVariable)
// console.log(replacable)
// console.log(constant)


const message = "javascript"
const count = 1
const bigNumber = 9999999999999999n
const isTrue = false
const noData = null
let noAssigned

// console.log(typeof message);
// console.log(typeof count);
// console.log(typeof bigNumber);
// console.log(typeof isTrue);
// console.log(typeof noData);
// console.log(typeof noAssigned);
// console.log(typeof person);


// ini contoh mutable
let name = "jhony"
let newName = name

// console.log(name);
// console.log(newName);

name = "Budi"

// console.log(name);
// console.log(newName);

// ini contoh immutable
let person = {
    name: 'joni',
    age: 26
}

let newPerson = person

// console.log(person)
// console.log(newPerson)

newPerson.name = "Budi"

// console.log(person)
// console.log(newPerson)


// string build method

let kotak = "Purwadhika"

console.log(kotak.slice(9, 4)) // gabis dibalik
console.log(kotak.substring(9, 4)) // otomatis di koreksi
console.log(kotak.substr(4, 9))  // panjang huruf

console.log(kotak.toLowerCase()); // kecil
console.log(kotak.toUpperCase()); // kapital

console.log(kotak.replace('a', 'u')); // replace
console.log(kotak.split("").reverse().join(""));  // reverse word

// template literal (backtick)
const name1 = "Budi"
let name2 = `Hello ${name1}
selamat datang`

console.log(name2);

