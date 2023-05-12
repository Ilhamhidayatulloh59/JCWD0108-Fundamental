// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz");
        } else if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}
// fizzBuzz(15)

function fizzBuzz2(n) { // return
    let result = ""
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += "fizzBuzz" + "\n"
        } else if (i % 3 == 0) {
            result += "fizz" + "\n"
        } else if (i % 5 == 0) {
            result += "buzz" + "\n"
        } else {
            result += i + "\n"
        }
    }
    return result
}

console.log(fizzBuzz2(15));