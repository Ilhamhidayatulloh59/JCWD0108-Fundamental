// Write a code to change every letter a into * from a string of input
let str = "An apple a day keeps the doctor away"
let result = ""

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char == 'a' || char == 'A') {
        result += "*"
    } else {
        result += char
    }
}
console.log(result);
console.log(str.toLowerCase().replace(/a/g, "*"));
console.log(str.replace(/a/gi, "*"));
console.log(str.toLowerCase().replaceAll("a", "*"));

/*
*
**
***
****
*****
*/