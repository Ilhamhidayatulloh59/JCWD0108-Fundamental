// if statment
let age = 16
if (age >= 17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}

let grade = "D"

if (grade === "A") { // truth or false
    console.log("Excellent Result!");
} else if (grade === "B") {
    console.log("Great Result!");
} else if (grade === "C") {
    console.log("Average Result!");
} else {
    console.log("Invalid Grade");
}

let date = new Date("2023-12-31")
let day = date.getDay()
switch (day) {
    case 0:
        console.log("Sekarang hari Minggu");
        break;
    case 1:
        console.log("Sekarang hari Senin");
        break;
    case 2:
        console.log("Sekarang hari Selasa");
        break;
    case 3:
        console.log("Sekarang hari Rabu");
        break;
    case 4:
        console.log("Sekarang hari Kamis");
        break;
    case 5:
        console.log("Sekarang hari Jum'at");
        break;
    default:
        console.log("Sekarang hari Sabtu");
        break;
}

// falsy
// console.log(Boolean("")); // gak ada isinya
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// truthy
// console.log(Boolean(" "));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(1));
// console.log(Boolean("0"));
// console.log(Boolean("1"));

// console.log(5 !== 5);
// console.log(5 !== "5");

let x = 10
let y = 5

console.log(x == 10 && y == 2) // false 
console.log(x == 10 || y == 2) // true
console.log(!(x == 10 || y == 2)) // false
console.log(! true); // false

// ternary oprator
let str = ""
console.log(str === "Javascript" ? "Javasript" : "Not Javascript");

str === "Javascript" ? console.log("Javasript") : str === "Python" ? console.log("Python") : console.log("C++");