// get difference between dates in days
// bikin 2 variable menampung 2 acuan tanggal
let date1 = new Date()
let date2 = new Date("2024-01-01")
// untuk mendapatkan selisih menggunakan millisecond ~ getTime()
let selisih = date2.getTime() - date1.getTime()
console.log(`${(selisih / (24 * 60 * 60 * 1000)).toFixed()} hari menuju tahun baru`);
console.log(`${Math.round(selisih / (24 * 60 * 60 * 1000))} hari menuju tahun baru`);

// membulatkan number
let number = 20.45
console.log(Math.round(number)) // sesuai aturan matematika
console.log(Math.ceil(number)) // dibulatkan ke atas
console.log(Math.floor(number)) // dibulatkan ke bawah

// convert days to years, months and days
// yang diketahui jumlah hari
let days = 400
let tahun = Math.floor(days / 365) // membulatkan ke bawah
let sisa = days % 365 // menemukan sisa hari
let bulan = Math.floor(sisa / 30)
let hari = sisa % 30
console.log(`${tahun} tahun, ${bulan} bulan dan ${hari} hari`);