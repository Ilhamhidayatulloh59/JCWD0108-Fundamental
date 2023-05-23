function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] 
                /*
                 arr = [4, 3]
                 [4, 3] = [3, 4]
                */
            }
        }
    }
    return arr
}

console.log(bubbleSort([10, 20, 5, 15]))
console.log(selectionSort([10, 20, 5, 15]))

let [a, b] = [4, 3]
console.log([b, a])

function selectionSort(arr) {
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i

        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j
        }

        if(min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
