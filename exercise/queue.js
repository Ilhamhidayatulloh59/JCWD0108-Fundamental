class QueueClass {
    constructor(data) {
        this.data = data
    }

    #randomTime() {
        return Math.ceil(Math.random() * 10)
    }

    run() {
        let i = 0
        while (i < this.data.length) {
            let promisData = new Promise(resolve => resolve(this.data[i]))
            
            let executePromise = async () => {
                try {
                    let data = await promisData
                    console.log(`${data} done in ${this.#randomTime()} minutes`)
                } catch (err) {
                    console.log(err)
                }
            }
            executePromise()
            i++
        }
    }
}

module.exports = QueueClass