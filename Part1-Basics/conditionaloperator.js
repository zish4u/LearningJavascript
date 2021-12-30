/***************************If, Else, truthy, falsy****************************/

let fisrtVal = 14

if(fisrtVal>=14){
    console.log('Statmennt is running because condition is true')
}

// truthy, falsy
//Below will always return false, so these are falsy apart from these all are truthy 

let num1 = ""
let num2 = null
let num3
let num4 =0
let num5= false

if(num5){
    console.log('Its ture');
}else{
    console.log('Its false');
}

//Ternary Operator

let age = 18

let user = age>=17 ? 'Yo can vote': 'You are not eligible for vote'
console.log(user)