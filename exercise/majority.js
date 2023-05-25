function majority(arr) {
    return arr.filter((v, i, a) => a.filter((item) => item == v).length > a.length / 2)[0] || 0
}

console.log(majority([2, 2, 1, 1, 1, 2, 2, 3, 3, 3]))