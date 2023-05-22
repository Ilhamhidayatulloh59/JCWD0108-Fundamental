class Stack {
    // private proverties
    #maxSize
    #container = []

    constructor(maxSize = 10) {
        // default maxSize 10
        this.#maxSize = maxSize
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() {
        return this.#container.length === 0
    }

    push(element) {
        if (this.#isFull()) {
            throw new Error("Stack Overflow!")
        }
        this.#container.push(element)
    }

    pop() {
        if (this.#isEmpty()) {
            throw new Error("Stack Underflow!")
        }
        this.#container.pop()
    }

    getElements() {
        return this.#container
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)


console.log(stack.getElements())
stack.pop()
console.log(stack.getElements())
