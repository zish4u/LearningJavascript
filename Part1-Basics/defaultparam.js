/**************Default Parameter*********** */



// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1));  
//Above example will throw error Nan because there are two parameter in function but we passed only one argument. 
//Earlier to prevent this we used to do with if condition, like below.

function sumOfTwoNum(a, b){
    if(typeof b === 'undefined'){
        b=0;
    }
    return a+b;
}

console.log(sumOfTwoNum(4));

//But now we can use default parameter like below.

function sumOfNum(a, b=0){
    return a+b
}

console.log(sumOfNum(2)); //This will return 2+0 because default value of b is 0
console.log(sumOfNum(6, 4));  //This will return 6+4 i.e 10 because b=0 is replaced by argument 4.

function greet(a='Hello', b){
    return a+b;
}

console.log(greet(undefined,'faridy'));

