const preschoolSum = require("./preschoolSum.js");
const test = require("./myTestLib.js")

/* 
console.log(preschoolSum(7, 4));
console.log(preschoolSum(5, 1));
console.log(preschoolSum(9));
console.log(preschoolSum(4.5, 3));
console.log(preschoolSum(1, -3));
console.log(preschoolSum(2.9, 2));
console.log(preschoolSum(2.1, 2));
 */


test(8, preschoolSum(4,4), "Tíz alatti egész eredménynél magát a számot kapjuk.")
test(0, preschoolSum(2,-5), "Nulla alatti eredmény esetén 0-át ad vissza.")
test('sok', preschoolSum(9,5), "Tíz feletti eredmény esetén 'sok' szöveget adja vissza.")
test(10, preschoolSum(5,5), "Tízre 10-et ad vissza.")
