/*
Create a function to calculate Body Mass Index (BMI)
Formula : BMI = weight (kg) / (height (meter))²
Parameters : weight & height
Return values :
    < 18.5 return “less weight”
    18.5 - 24.9 return “ideal”
    25.0 - 29.9 return “overweight”
    30.0 - 39.9 return “very overweight”
    > 39.9 return “obesity”
*/

function BMI(w, h) { // w = kg => h = cm
    let rumus = w / (h / 100) ** 2
    if(rumus < 18.5) {
        return "less weight"
    } else if (rumus >= 18.5 && rumus <= 24.9) {
        return "ideal"
    } else if (rumus >= 25.0 && rumus <= 29.9) {
        return "overweight"
    } else if (rumus >= 30.0 && rumus <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}

console.log(BMI(70, 170));