/* *************************************
        ARRAY SEACHING
*************************************** */

// indexOf/lastIndexOf and includes
// The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the 
// same as their string counterparts, but operate on items instead of characters:

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was 
// found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true

const arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
console.log( arr.includes(NaN) );// true (correct)