// for loop
// for (let i = 1; i <= 3; i++) {
//     console.log(`Hello Word ${i}`);
// }

// for (let i = 10; i >= 0; i-- ) {
//     console.log(i);
// }

// for (let i = 1; i > 0; i++) {
//     console.log(i);
// }


// while loop
// let i = 0
// while (i < 3) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(`data ${i}`);
//     i++
// } while (i < 3);

// pemakaian break di dalam loop
// while (true) {
//     console.log(i);
//     if (i === 5) break
//     i++
// }

// pemakaian continue di dalam loop
for (let i = 0; i < 5; i++) {
    if (i === 3) continue
    console.log(i);
}

/* 
1 x 3 = 3
2 x 3 = 6
 ...
10 x 3 = 30
*/

let number = 3
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`)
}

