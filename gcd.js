function gcd(a, b) {
    let fpb = 0
    let i = 1
    while (i <= a) {
        if (a % i == 0 && b % i == 0) fpb = i
        i++
    }
    return fpb
}

console.log(gcd(20, 16))