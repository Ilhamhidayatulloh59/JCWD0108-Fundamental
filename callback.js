function calculator(a, b, callback) {
    callback(a + b)
}

function displayer(something) {
    console.log(something)
}

calculator(5, 5, displayer) // displayer sebagai callback function

