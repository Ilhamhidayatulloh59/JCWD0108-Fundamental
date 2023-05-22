const arr = [1, 8, 3, null, 5, 4, 7, null, 12, 11, 13]
const arr2 = ["ahmad", "andi", "akmal", "alfian", "amadeo", "a fathir"]

// replace ~ delete or update
arr2.splice(2, 3, null, null , "JR" ) // ~ delete

// update with index
arr2[5] = null

console.log(arr2)


// let result = []

// arr.map((item, idx, arr) => {
//     if (item % 2 == 0) {
//         result.push(item)
//     }
// })

// console.log(arr.filter((val) => val % 2 == 0))

// console.log(result);
// console.log(arr.sort((a, b) => a - b))
// console.log(arr2.sort())