const sum = require("./index")

test("adds one positive interger to another positive integer", () => {
    expect(sum(1, 2)).toBe(3)
})