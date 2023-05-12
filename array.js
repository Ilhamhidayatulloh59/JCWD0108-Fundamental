// cara deklarasi array
let arr = ["A", "B", "C", [1, 2, ["D", "F"]], "E"]
let arr2 = new Array("A", "B", 1, new Array("G", "H", "I"), 3)

// console.log(arr);
console.log(arr2);
// console.log(arr[3]);
console.log(arr2[0]);

// console.log(arr[3][1]); // ini ngambil 2
// console.log(arr[3][2][1]); // ini ngambil "F"

let scores = [10, 20, 30, 40, 50]
let scores1 = [10, 20, 30, 40, 50]
console.log(scores == scores1);

scores.unshift(0) // menambahkan nilai baru ke dalam array di (depan)
scores.shift() // menghapus satu nilai array di (depan)
scores.push(60) // menambahkan nilai baru ke dalam array di (belakang)
scores.pop() // menghapus satu nilai array di (belakang)

// scores.reverse() // ini untuk mereverse
// scores.sort((a, b) => b - a)  // sort dari besar ke kecil
// scores.sort((a, b) => a - b)  // sort dari kecil ke besar
// scores.splice(2, 2) // delete some array

scores.forEach(item => { // looping array menggunakan forEach
    // console.log(item);
})

scores.map(item => { // looping array menggunakan map
    // console.log(item);
})

for (let i = 0; i < scores.length; i++) { // looping array menggunakan for biasa
    // console.log(scores[i]);
}

for (const score of scores) { // looping array menggunakan for of
    // console.log(score);
}

let filter = scores.filter((i) => i > 20)

console.log(scores);
console.log(filter);
console.log(scores.filter((i) => i > 20));
console.log(scores.length);
