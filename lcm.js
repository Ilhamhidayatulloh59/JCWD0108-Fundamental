function lcm(a, b) {
    let kpk = a > b ? a : b // value terbesar ~ 9, 18
    let counter = a > b ? a : b // value terbesar ~ 9
    do {
        if (kpk % a == 0 && kpk % b == 0) {
            return kpk
        }
        kpk += counter
    } while (true);
}

console.log(lcm(35, 2000))
