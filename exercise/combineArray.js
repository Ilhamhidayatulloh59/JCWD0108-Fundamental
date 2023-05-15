let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

function combine(input1, input2) {
    // return [...input1, ...input2]
    return input1.concat(input2)
}

console.log(combine(arr1, arr2))