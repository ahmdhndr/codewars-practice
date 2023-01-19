/*
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

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