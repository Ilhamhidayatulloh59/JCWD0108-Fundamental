// Write a code to check whether a string is a palindrome or not.

let word = "Katak"
let reverseWord = ""

for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word.charAt(i)
    // console.log(word.charAt(i));
    // console.log(word[i]);
}

console.log(word.toLowerCase() == reverseWord.toLowerCase() ? `${word} adalah palindrome` : `${word} bukan palindrome`);
