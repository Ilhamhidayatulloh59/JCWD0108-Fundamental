let number = 12345678
let strNumber = number.toString()
let result = "" // "5.678"

for (let i = 0; i < strNumber.length; i++) { // 4
    if (i % 3 === 0 && i > 0) {
        result = "." + result
    }
    result = strNumber.charAt(strNumber.length - 1 - i) + result // charAt ~ buat menemukan character ke sekian itu apa
}

console.log(`Rp. ${result},00`);
console.log(number.toLocaleString("id-ID", {style: "currency", currency: "IDR"}).replace('Rp', "Rp."));