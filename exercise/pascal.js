function pascal(n) {
    let res = []
    for (let i = 1; i <= n; i++) { // i = 4
        let arr = []
       for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) { // depan & pojok selalu 1 // 3
                arr.push(1)
            } else {
                arr.push(res[i - 2][j - 1] + res[i - 2][j])
            }
       }
       res.push(arr)
    }
    return res
}

console.log(pascal(2))