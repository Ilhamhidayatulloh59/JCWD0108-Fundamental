// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
let arr =  ["dog", "cat", "dragon", "fish", "snake"]

function concate(input) {
    let lastWord = input[input.length - 1]
    input.pop()
    return input.join(", ") + " and " + lastWord
}

console.log(concate(arr));