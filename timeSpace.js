// brute force
function checkDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
       }
    }
    return false
}

console.log(checkDuplicate([0, 2, 1, 1]))
console.log(checkDuplicate2([0, 2, 1, 1]))
console.log(checkDuplicate3([0, 2, 1, 1]))

// O(n)
function checkDuplicate2(arr) {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        if (unique.includes(arr[i])) {
            return true
        } else {
            unique.push(arr[i])
        }
    }
    return false
}

function checkDuplicate3(arr) {
    arr.sort() // [0, 1, 1, 2]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) 
            return true
    }
    return false
}