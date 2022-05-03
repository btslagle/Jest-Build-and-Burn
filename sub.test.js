const sub = require("./index")

test("subtracts one number from another number", () => {
    expect(sub(4, 3)).toEqual(1)
})