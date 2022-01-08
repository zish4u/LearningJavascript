/****************Arrow Function******************** */

//Arrow function is shorter syntax for function, introduced in es6.


// Default fuction syntax.
// function sayHello(name){
//     return `Hello ${name}`
// }

//console.log(sayHello('Zish'));

//Function expressoion
// const sayHello = function(name){
//     return `Hello ${name}`
// }
// console.log(sayHello('zish'));

//Arrow function
const sayHello = (name) =>{
    return `Hello ${name}`
}
console.log(sayHello('Zish'));

//Note: If there is only one parameter in arrow function then we can remove () before arrow. See below.

// const isEven = num => {
//     return num % 2===0;
// }
// console.log(isEven(5));

//We can also write more shorter arrow function.

const isEven = num => num%2===0;

console.log(isEven(8));