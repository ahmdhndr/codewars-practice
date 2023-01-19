/* 
DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/* My method */
function reversedStr(str) {
  return str.split('') /* Split the given string into new array */
    .reverse() /* Reverses the order of the elements in an array */
    .join(''); /* Returns the reversed array as a string */
}
// const reversedStr = (str) => str.split('')
//   .reverse()
//   .join('');

/* Other method */
// const reversedStr = str => [...str] /* turns the given string into new array of substrings */
//   .reverse().join('');

console.log(reversedStr('world'), 'dlrow');
console.log(reversedStr('hello'), 'olleh');
console.log(reversedStr(''), '');
console.log(reversedStr('h'), 'h');
console.log(reversedStr('achmad'), 'damhca');