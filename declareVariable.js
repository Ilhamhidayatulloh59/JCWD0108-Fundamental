// declarasi variable
// var ~ function scope
// const & let ~ block scope

// var str = "purwadhika"

function log(){
    var A = 1
    let B = 2
    const C = 3
    console.log(A) // 1
    console.log(B) // 2
    console.log(C) // 3

    if (true) {
        var A = 4
        let B = 5
        const C = 6
        console.log(A) // 4
        console.log(B) // 5
        console.log(C) // 6
    }

    while (true) {
        var A = 7
        let B = 8
        const C = 9
        console.log(A) // 7
        console.log(B) // 8
        console.log(C) // 9
        break
    }

    console.log(A)
    console.log(B)
    console.log(C)
}

log()
