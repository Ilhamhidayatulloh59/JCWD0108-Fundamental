let str = 'Pig latin is cool !'

function strAy(str) {
    return str.split(" ").map(item => item.substr(1) + item[0] + "ay").join(" ")
}

console.log(strAy(str))