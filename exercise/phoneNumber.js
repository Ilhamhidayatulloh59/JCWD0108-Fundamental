let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const phoneNumber = (input) => {
    let result = "(xxx) xxx-xxxx"
    input.map(item => {
        result = result.replace("x", item)
        console.log(result)
    })
    return result
}

console.log(phoneNumber(arr))

let str = "ahmad"
console.log(str.replace("a", "ay"))
console.log(false + 1)
