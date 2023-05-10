// Write a code to find the sum of the numbers 1 to N.
let n = 10
let count = 1
let text = "1"
for (let i = 2; i <= n; i++) {
    text += ` + ${i}` // concate string
    count += i // sum
}

console.log(`${n} => ${text} = ${count}`);