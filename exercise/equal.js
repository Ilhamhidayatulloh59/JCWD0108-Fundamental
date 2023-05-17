let obj1 = {
    age: 25,
    name: "Budi"
}

let obj2 = {
    name: "Budi",
    age: 26
}

/* JSON ~ javascript object notaion
 nama properti dalam object mempunyai tanda kutip (string)
*/

function compare(a, b) {
    let sortA = {}
    let sortB = {}
    Object.keys(a).sort().map(i => sortA[i] = a[i])
    Object.keys(b).sort().map(i => sortB[i] = b[i])
    return JSON.stringify(sortA) == JSON.stringify(sortB)
}

console.log(compare(obj1, obj2))

function compare2(a, b) {
    let lengthA = Object.keys(a).length
    let lengthB = Object.keys(b).length
    
    if (lengthA == lengthB) {
        return Object.keys(a).every(item => Object.keys(b).includes(item) && a[item] == b[item])
    }
    return false
}

console.log(compare2(obj1, obj2))

