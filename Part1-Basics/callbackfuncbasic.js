/************************Callback Function*************************** */

function showAge(age){
    console.log(`Inside showAge function, age is ${age}`);
}

function userAge(callback){
    console.log('Inside userAge function age is');
    callback(20);
}

userAge(showAge)


//Example2:

function sumOfNumber(a,b){
    console.log(a+b);
}

function sendNumber(callbackFunction){
    let a=20;
    let b=40;
    callbackFunction(a,b)
}

sendNumber(sumOfNumber);