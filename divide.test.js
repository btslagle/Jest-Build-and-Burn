const divide = require("./divide")

test("divides one number by another number", () => {
    expect(divide(10, 5)).toEqual(2)
})