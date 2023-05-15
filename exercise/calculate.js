// Write a function to calculate each element in the same position from two arrays of integer.
let arr1 = [1, 2, 3]
let arr2 = [3, 2, 1]  // [4, 4, 4]

function calculateArray(input1, input2) {
    let result = []
    for (let i = 0; i < input1.length; i++) {
        result.push(input1[i] + input2[i])
    }
    return result
}

console.log(calculateArray(arr1, arr2))