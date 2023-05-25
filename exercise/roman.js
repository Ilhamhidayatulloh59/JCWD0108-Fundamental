function roman(str) {
    let romanChar = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let res = 0
    str.split("").forEach((v, i) => {
        romanChar[v] < romanChar[str[i + 1]] ? res -= romanChar[v] : res += romanChar[v]
    })
    return res
}

console.log(roman("XL")) // ["X", "L"] // 20