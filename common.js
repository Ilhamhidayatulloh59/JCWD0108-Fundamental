function common(str) {
    let result = ""
    let maxSize = 1
    str.split("").map(item => {
        let count = str.split(item).length - 1
        if (count > maxSize) {
            result = item
            maxSize = count
        }
    })
    return result
}

console.log(common("kereta"))