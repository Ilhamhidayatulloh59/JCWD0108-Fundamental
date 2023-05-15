let arr1 = [1, 2, 3];
let arr2 = [1, 3, 5];

function difference(arr1, arr2) {
    result = []
    conc = arr1.concat(arr2)

    for(i = 0; i < conc.length; i++) {
        if(conc.filter(item => item == conc[i]).length == 1 && !result.includes(conc[i])) {
            result.push(conc[i])
        }
    }
    return result
}

console.log(difference(arr1, arr2));