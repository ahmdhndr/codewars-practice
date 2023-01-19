/*
DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/* Method 1 */
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  return sum;
}

/* Other method */
// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }
// const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// function positiveSum(arr) {
//   return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
// }


console.log(positiveSum([1, 2, 3, 4, 5])); /* 15 */
console.log(positiveSum([1, -2, 3, 4, 5])); /* 13 */
console.log(positiveSum([])); /* 0 */
console.log(positiveSum([-1, -2, -3, -4, -5])); /* 0 */
console.log(positiveSum([-1, 2, 3, 4, -5])); /* 9 */