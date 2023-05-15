function multiple(maxLength, ...arr) {
    return arr.slice(0, maxLength)
}

console.log(multiple(2, 1, 2, 3, 4, 5 ,6 ,7, 8)) // [1, 2, 3, 4, 5]