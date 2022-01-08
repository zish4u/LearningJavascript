/***********************Hoisting***********************/
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting is not possible with const or let keyword, as well as expression function or arrow function.

//eg1:
x=5
console.log(x);
var x;

//eg2:
console.log(sayHello('Zish'));

function sayHello(name){
    return `Hello ${name}`
}

console(isEven(4));
var isEven = (number) => number%2 ===0;
