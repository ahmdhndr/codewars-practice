/* Method 1 */
function numberToString(num) {
  const str = num.toString();
  return str;
}

/* Method 2 */
// const numberToString = num => num.toString();
// const numberToString = num => String(num);

/* Method 3 */
// const numberToString = num => '' + num;
// const numberToString = num => num + '';

console.log(numberToString(123)); /* '123' */
console.log(numberToString(999)); /* '999' */
console.log(numberToString(-100)); /* '-100' */