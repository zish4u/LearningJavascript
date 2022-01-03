/**********************Nested If Else***********************/ 

let winningNum = 19
let userGuess = +prompt('Guess a number: ');
// console.log(userGuess)
if(userGuess===winningNum){
    console.log('Your guess is right.');
}else{
    if(userGuess>winningNum){
        console.log('You guess is too high.');
    }else{
        console.log('You guessed too low.');
    }
}

/***********************Else If****************************/

let days = +prompt('Enter number of day:')

if(days === 0){
    console.log('Today is sunday');
}else if(days ===1){
    console.log('Today is Monday');
}else if(days ===2){
    console.log('Today is Tuesday');
}else if(days ===3){
    console.log('Today is Wednessday');
}else if(days ===4){
    console.log('Today is Thurseday');
}else if(days ===5){
    console.log('Today is Friday');
}else if(days === 6){
    console.log('Today is Saturday');
}else{
    console.log('You entered a number more than  a week');
}

/***********************Switch Condition****************************/
//We can use same example in switch condition.

switch(days){
    case 0:
        console.log('Today is sunday');
        break
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednessday');
        break;
    case 4:
        console.log('Today is Thurseday');
        break;
    case 5:
        console.log('Today is Friday');
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Invalid day.');


}