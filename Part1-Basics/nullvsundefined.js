/*******************- Null vs Undefined -******************************** */

let studentName;

console.log(typeof studentName)  // returns type undefined

let teacherName = null

console.log(typeof teacherName); // returns type object

console.log(studentName + 2); //Returns NaN (Not a number), 
console.log(teacherName + 3); //Returns 3 because null treated as zero to perform arthmetic operation.
// Simply undefined means a variable is declared but has not been assigned any value. 
// Type of undefined is undefined while type of null is object.

/***********************Bigint***************************** */
let fisrtNum = BigInt(123)
let secondNum = BigInt(12)
let thirdNum = 44

console.log(fisrtNum+secondNum) // 135n Also return a bigint, if we add int with bigint it will throw error.
//console.log(fisrtNum+thirdNum)  // Throw error.
