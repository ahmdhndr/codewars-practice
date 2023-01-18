/* Method 1 */
// function lovefunc(flower1, flower2) {
//   if (
//     flower1 % 2 === 0 && flower2 % 2 !== 0
//     || flower1 % 2 !== 0 && flower2 % 2 === 0
//   ) return true;
//   return false;
// }

/* Method 2 */
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

/* Method 3 */
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

console.log('Method 3 => ', lovefunc(3, 2)); /* true */
console.log('Method 3 => ', lovefunc(2, 2)); /* false */
console.log('Method 3 => ', lovefunc(1, 1)); /* false */
console.log('Method 3 => ', lovefunc(4, 3)); /* true */