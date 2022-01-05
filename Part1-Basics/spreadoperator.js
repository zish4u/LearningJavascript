/*****************Spread operator in Array and Object******** */

/***Spread operator in Array***/
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2]
console.log(arr3);

let arr4 =[..."123456789"]
console.log(arr4);

//let arr5 = [...123456]
//console.log(arr5);    //Will return errror because number is not iterable.

let arr6 = [...arr1, ...arr2, 89,90]
console.log(arr6)       // We can add more value with spread operator.


/***Spread operator in Object***/
const obj1 = {key1: 'val1', key2: 'val2'}
const obj2 = {key3: 'val3', key4: 'val4'}

const obj = {...obj1, ...obj2}
console.log(obj);

//Note: In object if two key's name are same then value of second will override first.

obj3 = {key1: 'val1', key2: 'val2'}
obj4 = {key3: 'val3', key4: 'val4', key1: 'val44'}

let obj5 = {...obj3, ...obj4}
console.log(obj5);

let obj6 = {..."abcdefgh"}

console.log(obj6);
