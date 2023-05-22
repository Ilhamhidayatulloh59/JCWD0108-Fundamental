const fruit = ["banana", "apple", "jackfruit", "apple"]

const newFruit = new Set(fruit)
newFruit.add("orange")
newFruit.delete("banana")
console.log(newFruit.size)

// console.log(newFruit.entries())

newFruit.forEach(val => console.log(val))

console.log(newFruit)

// dibalikan ke bentuk array
console.log([...newFruit]);
console.log(new Array(...newFruit));
