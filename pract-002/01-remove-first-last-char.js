/*
DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

/* Method 1 */
// function removeChar(str) {
//   return str.split('').slice(1, -1).join('');
// };

/* Method 2 */
// const removeChar = str => str.split('').slice(1, -1).join('');
const removeChar = str => str.slice(1, -1);

/* Other method */
// function removeChar(str) {
//   return str.substring(1, str.length - 1);
// };

console.log('Method 2 => ', removeChar('achmad')); /* chma */
console.log('Method 2 => ', removeChar('nt')); /*  */