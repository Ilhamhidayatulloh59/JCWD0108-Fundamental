// Write a code to print the first N fibonacci numbers.
let n = 10

let curr = 0
let next = 1

for (let i = 0; i < n; i++) {
    console.log(curr);
    let count = curr + next // ini jumlah dari current + next
    curr = next // delegasi next menjadi current
    next = count // delegasi count (hasil current + next) menjadi next
}