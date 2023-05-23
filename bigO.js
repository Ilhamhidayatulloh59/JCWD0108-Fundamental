// O(1) => constant
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(arr[2]) // akses array menggunakan index

// O(n) => linear
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // melakukan iterasi kepada array yang kita looping
}

// O(log n) => logarithm n
let result = []
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) { // looping dan operasi lain di dalam looping
        result.push(i)
    }
}

// O(n^2) => square 2
// looping dalam looping ~ nested looping
