// Write a conditional statement to sort three numbers

let a = 12
let b = 13
let c = 11

if (a > b) { // 15 > 10
    let d = a
    a = b // 10
    b = d // 15
}

if (b > c) { // 15 > 5
    let d = b
    b = c // 5
    c = d // 15
}

if (a > b) { // 10 > 5
    let d = a
    a = b // 5
    b = d // 10
}

console.log(a, b, c); // => 5, 10, 15

let bigest = Math.max(a, b, c)
let lowest = Math.min(a, b, c)
let mid = a + b + c - bigest - lowest
console.log(lowest);
console.log(mid);
console.log(bigest);