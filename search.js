// linear search
function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) return i 
    }
    return -1
}

console.log(search([2, 20, 10, 3], 20))
let result = search2([2, 20, 10, 3], 20)
console.log(result);

let arr = [2, 3, 4, 10, 40]
console.log(binarySearch(arr, 0, arr.length - 1, 4))

function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        if (arr[mid] == x) return mid 

        if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x)

        return binarySearch(arr, mid + 1, r, x)
    }

    return -1
}

function search2(arr, x) {
    return arr.indexOf(x)
}

