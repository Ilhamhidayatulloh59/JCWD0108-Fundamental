function myFunc(str) {
    let res = []
    str.split("").map(item => {
        if (item === item.toUpperCase()) {
            res.push(" ")
            res.push(item)
        } else {
            res.push(item)
        }
    });
    return res.join("").split(" ").reverse().join(" ").toLowerCase()
}

console.log(myFunc("johnDoeMiller"))