// let arr = [1, 2, 3, 4, 1, 2] // [1, 2] ~ duplicate

// function duplicate(input) {
//     let arr = [] // [1, 2, 3, 4]
//     let duplicate = [] // [1, 2]
//     let difference = []
//     input.map(item => {
//         if (arr.includes(item)) {
//             duplicate.push(item)
//         } else {
//             arr.push(item)
//         }
//     })

//     input.map(item => {
//         if (duplicate.includes(item) !== true) {
//             difference.push(item)
//         }
//     })
//     return [duplicate, difference]
// }

// console.log(duplicate(arr));

let arr = [10, 20, 30, 10, 20, 40]

function duplicate(arr) {
    result = []
    for(i = 0; i < arr.length; i++) {
        if(arr.filter(item => item == arr[i]).length > 1 && !result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(duplicate(arr));