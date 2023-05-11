// Write a code to swap the case of each character from string 
let str = "The QuiCk BrOwN Fox" // =>  tHE qUIcK bRoWn fOX
let result = ""

for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char === char.toUpperCase()) {
        result += char.toLowerCase()
    } else {
        result += char.toUpperCase()
    }
}

console.log(result);