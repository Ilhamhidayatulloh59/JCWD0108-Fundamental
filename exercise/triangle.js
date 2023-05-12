/*
Create a function that can create a triangle pattern according to the height we provide like the following :
01
02  03
04  05  06
07  08  09  10

Parameters : height → triangle height
*/

function triangle(n) {
    let result = ""
    let count = 1
    for (let i = 1; i <= n; i++) { // ini buat high
        for (let j = 1; j <= i; j++) { // ini buat isinya
            if (count < 10) {
                result += `0${count} `
            } else {
                result += `${count} `
            }
            count++
        }
        result += "\n"
    }
    return result
}

console.log(triangle(5));