// console.log(typeof console)
// console["log"](typeof console)

const person = {
    name: "David",
    age: 20
}

// console.log(person.name)
// console.log(person["name"])
// let name = "name"
// console.log(person[name])

console.log(Object.keys(person))

let res = {}

for (const key in person) {
    console.log(`${person[key]}`)
    res[person[key]] = key
}
res[10] = "number"
res["alamat"] = "Bandung"
res[30] = "number2"
res[11] = "number2"
res[9] = "number2"

console.log(res)