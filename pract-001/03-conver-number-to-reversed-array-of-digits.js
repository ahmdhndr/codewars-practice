/* Method 1 */
// function digitize(n) {
//   return n.toString().split('').map(Number).reverse();
// }

/* Method 2 */
// function digitize(n) {
//   const initArray = ('' + n).split('');
//   const reversedArray = [];
//   for (let i = initArray.length - 1; i >= 0; i--) {
//     reversedArray[i] = parseInt(initArray.shift(), 10);
//   }
//   return reversedArray;
// }

/* Method 3 */
const digitize = (n) => ('' + n).split('').map(Number).reverse();

console.log('Method 1 => ', digitize(12345));
console.log('Method 1 => ', digitize(0));