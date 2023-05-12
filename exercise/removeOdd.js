// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeOdd(arr) {
    return arr.filter(item => item % 2 == 0)
}

function removeOdd2(arr) {
    let even = []
    arr.map(item => {
        if (item % 2 == 0) {
            even.push(item)
        }
    })
    return even
}

console.log(removeOdd(arr));
console.log(removeOdd2(arr));