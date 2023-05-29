const { sum, average, str } = require("./sum")

test("Testing sum function", () => {
    expect(sum(10, 5)).toBe(15)
})

test("Testing average function", () => {
    expect(average(10)).toBe(0)
})

test("Testing str function", () => {
    expect(str()).toBe("purwadhika")
})