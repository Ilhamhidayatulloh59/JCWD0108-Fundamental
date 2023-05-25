function profit(arr) {
    let res = 0
    for (let i = arr.length - 1; i >= 0; i--) { // 4, 3, 2, 1, 0
        for (let j = i - 1; j >= 0; j--) { // 3, 2, 1, 0
           if (res < arr[i] - arr[j]) {
                res = arr[i] - arr[j]
           }
        }
    }
    return res
}

console.log(profit([7, 6, 5, 4, 3, 2, 1]))