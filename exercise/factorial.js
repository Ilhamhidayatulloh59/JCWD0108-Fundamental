// Write a code to find factorial of a number.

let n = 5 // 120
let counter = 1

for (let i = n; i > 0; i--) {
    // 5 x 4 x 3 x 2 x 1 = 120
    counter *= i  // counter = counter * i
}

console.log(counter)

// let n = 5
// let count = n
// let text = `${n}`

// for (let i = n - 1; i > 0; i--) {
//     count *= i
//     text += ` x ${i}`
// }

// console.log(`${n}! => ${text} = ${count}`);

