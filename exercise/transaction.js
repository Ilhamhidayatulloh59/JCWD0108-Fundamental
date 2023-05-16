class Product {
    name = ""
    price = 0
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const product1 = new Product("Apple", 10000)
const product2 = new Product("Mango", 9000)
const product3 = new Product("Orange", 7000)
const product4 = new Product("Melon", 8000)


class Transaction {
    total = 0
    productAll = []

    addToCart(product, qty) {
        product.qty = qty
        this.productAll.push(product);
    }

    getProduct() {
        this.productAll.map((item, idx) => {
            console.log(`${idx + 1}. ${item.name} ${item.price} x ${item.qty} = ${item.price * item.qty}`);
            this.total += item.qty * item.price
        }) 
        console.log(`total = ${this.total}`)
    }

    checkout(cash) {
        if (cash < this.total) {
            throw new Error("Duitnya kurang")
        }
        console.log(`cash = ${cash}`)
        console.log(`charge = ${cash - this.total}`)
    }
}

const transaction1 = new Transaction()
transaction1.addToCart(product1, 2)
transaction1.addToCart(product2, 1)
transaction1.addToCart(product3, 3)
transaction1.getProduct()
transaction1.checkout(100000)

const transaction2 = new Transaction()
transaction2.addToCart(product4, 5)
// transaction2.getProduct()
