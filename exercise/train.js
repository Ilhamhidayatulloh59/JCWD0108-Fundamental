/*
    Train class
    === properties ===
    ~ container => array ["masinis"]
    ~ maxSize = 11

    === method ===
    ~ addPassenger(string = name)
        1. name !== "masinis"
        2. name must be unique
    ~ outPassenger(string = name)
    ~ print all passenger with index without "masinis"
    
    === requirment ===
    ~ length = 11
    ~ utamakan kursi paling depan
    ~ jika ada kursi di tengah kosong, diisi terlebih dahulu
    */

    class Train {
        #container = ["masinis"]
        #maxSize = 11

        addPassenger(name) {
            if (this.#container.length >= this.#maxSize) throw new Error("Train overflow!")
            if (name == "masinis") throw new Error("masinis is not passenger")
            if (this.#container.includes(name)) throw new Error("name must be unique")

            let idx = this.#container.indexOf(null)
            if (idx == -1) {
                this.#container.push(name)
            } else {
                // this.#container[idx] = name
                this.#container.splice(idx, 1, name)
            }
        }

        outPassenger(name) {
            if (!this.#container.includes(name)) throw new Error("name undifined")

            let idx = this.#container.indexOf(name)
            // this.#container[idx] = null
            this.#container.splice(idx, 1, null)
        }

        getPassenger() {
            console.log("=== Daftar Penumpang ===")
            this.#container.map((val, idx) => {
                if (idx > 0) {
                    console.log(`${idx}. ${val == null ? "kursi kosong" : val}`)
                }
            })
        }
    }

    const train = new Train()
    train.addPassenger("ahmad")
    train.addPassenger("akmal")
    train.addPassenger("fatir")
    train.outPassenger("akmal")
    // train.addPassenger("amadeo")
    train.getPassenger()