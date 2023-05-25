function single(arr) {
    return arr.filter((v, i, a) => a.filter(item => item == v).length == 1)[0]
}

// console.log(single([2, 3, 1, 2, 3, 1]))
console.log(single2([2, 3, 1, 2, 3]))

function single2(arr) {
    let sing = [] // 2, 3, 1
    let dup = [] // 2, 3
    arr.map(item => {
        if (sing.includes(item) == false) {
            sing.push(item)
        } else {
            dup.push(item)
        }
    })
    return sing.filter(item => dup.includes(item) == false)[0]
}