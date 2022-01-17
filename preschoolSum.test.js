const { expect } = require('@jest/globals');
const preschoolSum = require('./preschoolSum.js')

test("Tíz alatti egész eredménynél magát a számot kapjuk.", () => {
    expect(preschoolSum(4,4)).toBe(8);
});

test("lefele kerekít", () => {
    expect(preschoolSum(2.8, 2.1)).toBe(4)
})