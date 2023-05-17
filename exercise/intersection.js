let obj1 = {
    a: 1, b: 2, c: 3
}

let obj2 = {
    a: 1, c: 3
}

Object.keys(obj1).map(i => console.log(`${i} = ${obj1[i]}`))

// let prop = 'a'

// obj1[prop] = 4
// console.log(obj1);
// obj1.d = 5
// obj1['d'] = 5

// console.log(Object.keys(obj1));
// console.log(obj1.a);
// console.log(obj1["a"]);
// console.log(obj1[prop]);



// for (const key in obj1) {
//     console.log(`${key} = ${obj1[key]}`)
// }

function myFunc(x, y) {
    let result = {}
    for (const key in x) { // a
        if (x[key] == y[key]) {
            result[key] = x[key]
        }
    }
    return result
}

console.log(myFunc(obj1, obj2));