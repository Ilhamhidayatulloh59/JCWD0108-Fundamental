let str = "SELAMAT DATANG DI PURWADHIKA BANDUNG" // "Hello World"
let capital = true
let result = ""

for (let i = 0; i < str.length; i++) {
    if (capital) { // TRUE
        result += str.charAt(i).toUpperCase()
        capital = false
    } else {
        result += str.charAt(i).toLowerCase()
    }

    if (str.charAt(i) === " ") {
        capital = true
    }
}

console.log(result);
console.log("A" === "a") 
