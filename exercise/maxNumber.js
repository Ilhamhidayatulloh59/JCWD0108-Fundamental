// mencari number terbesar
let arr = [10, 55, 79, 32]

function maxNumber(arr) {
    return Math.max(...arr) // 10, 55, 79, 32
}

function maxNumber2(arr) {
    let sort = arr.sort((a, b) => b - a)
    return sort[0]
}

console.log(maxNumber(arr));
console.log(maxNumber2(arr));