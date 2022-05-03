const multiply = require("./multiply")

test("multiplies one number and another number", () => {
    expect(multiply(2, 5)).toEqual(10)
})