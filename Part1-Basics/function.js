/********************Function**********************/

function sayHello(){
    console.log('Hello');
}

sayHello();

function sumOfThreeNumber(num1, num2, num3){
    return num1+num2+num3;
}

console.log(sumOfThreeNumber(4,3,8));

function isEven(num){
    if(num%2===0){
        return true
    }else{
        return false
    }
}

console.log(isEven(8));

//We can write above function in following methods.

//Method1:
function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}
console.log(isEven(3));

//Method2:
function isEven(num){
    return (num%2 === 0)? true: false;
}

console.log(isEven(3));

//Method3:
function isEven(num){
    return num%2 === 0;
}

console.log(isEven(6));



//Q: Write a function which takes a string as input and return character at fisrt index.

function firstChar(strin){
    return strin.charAt(0)
}

console.log('Character at first index is:', firstChar('Zish'));


//Q: Write a function which takes a array as input and a numnber then search that number in array and return index of that number.

function searchNumber(arr, num){
    for(let index in arr){
        console.log('index', arr[index], num);
        if(arr[index]===num){
            return index;
        }
    }
    return -1
}

console.log('Number found at index:', searchNumber([3,6,7,9], 6));

/**********Function Expression*******/

const birthdayGreetings = function(name){
    return `Hello ${name}`
}

console.log(birthdayGreetings('zish'));