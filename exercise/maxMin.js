// Write a function to get the lowest, highest and average value in the array (with and without sort function).
let arr = [1, 3, 2, 5, 4, 6, 7]

// without sort
function maxMin(input) {
    let max = Math.max(...input)
    let min = Math.min(...input)
    let avg = input.reduce((a, b) => a + b) / input.length
    return `max = ${max}, min = ${min}, avg = ${avg}`
}
console.log(maxMin(arr));

// with sort
function maxMin2(input) {
    let sort = input.sort((a, b) => a - b) // dari kecil ke besar
    let min = sort[0]
    let max = sort[input.length - 1]
    let avg = input.reduce((a, b) => a + b) / input.length
    return `max = ${max}, min = ${min}, avg = ${avg}`
}
console.log(maxMin2(arr));
