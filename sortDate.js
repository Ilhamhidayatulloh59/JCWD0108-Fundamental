let input = ["08-30-2023", "05-29-2023", "01-31-2024"]

function minDate(arr) {
    arr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    return arr
}

console.log(minDate(input))