// Write a code to check whether the number is prime number or not
let number = 10
let pembagi = 0
for (let i = 1; i <= number; i++) {
    console.log(`${number} % ${i} = ${number % i}`)
    if (number % i === 0) {
        pembagi++
    }
}

console.log(pembagi === 2 ? `${number} adalah bilangan prima` : `${number} bukan bilangan prima`);