function oddDay(arr) {
    let odd = arr.filter((v, i) => i % 2 != 0).reduce((a, b) => a + b)
    let even = arr.filter((v, i) => i % 2 == 0).reduce((a, b) => a + b)
    return even - odd
}

console.log(oddDay([10, 20, 30, 40])) // 10 - 20 + 30 - 40 = -20

console.log()
console['log']