/******************Boolean and Comparison Operator********************* */

//Boolean: true, false

let firstVal = 7;
let secondVal = 7;
let thirdVal ="7"
// console.log(firstVal>=secondVal) //true

// == vs ===
// console.log(firstVal==thirdVal); //true because == check value only not data type.
// console.log(firstVal===thirdVal); // false because === check value and data type also

// != vs !==
console.log(firstVal != secondVal); // false because != checks only value
console.log(firstVal != thirdVal) // Should return true but returns false because it checks only value not type.
console.log(firstVal !== thirdVal) //Returns true because !== check value and type also.