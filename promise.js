const tryPromise = new Promise((resolve, reject) => {
    let isError = false

    if (isError) reject("Ini kalau error")
    else resolve("Ini kalau sukses")

})


// assync Await
const asyncAwait = async () => {
    console.log("satu")
    await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally Success")) // asynchorous
    console.log("dua")
}

// asyncAwait()

const tryAndCatch = async () => {
    try {
        let age = 20
        if (age > 18) throw "Gagal"

        let result = await tryPromise
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

tryAndCatch()


/*
async function asyncAwait2() {
    console.log("tiga")
    await tryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally Success")) // asynchorous
    console.log("empat")
}

async function myFunc() {
   await asyncAwait()
   await asyncAwait2()
}
myFunc()

*/

