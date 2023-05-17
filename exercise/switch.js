let obj = {
    name: "david",
    age: 20
}

let result = {}
result[obj.name] = "name"
result[obj.age] = "age"

function myFunc(a) {
    let result = {}
    for (const key in a) {
        result[a[key]] = key
    }
    return result
}

console.log(myFunc(obj));