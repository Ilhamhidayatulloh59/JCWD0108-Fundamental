// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// includes & indexOf
// console.log(arr.includes(1)) // cek udh termasuk atau belum
// console.log(arr.indexOf(1)) // menemukan index sebuah value
// console.log(arr.includes(6))
// console.log(arr.indexOf(6))

function addValue(input, inputArr) {
    let arr = inputArr
    if (arr.includes(input)) {
        return "Value sudah ada"
    } else {
        arr.push(input)
    }
    return arr
}

let arr = [1, 2, 3, 4, 5]
console.log(addValue(5, arr));