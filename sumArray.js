let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function sum(arr) {
    let res = 0
    arr.map(v => v.map(i => res += i))
    return res
}

console.log(sum(input))