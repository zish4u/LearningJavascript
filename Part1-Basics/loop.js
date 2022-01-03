/*****************While Loop******************* */

let num1 = 10;

// while(num1 >= 1){
//     console.log(num1)
//     num1--;
// }

//Sum of number upto 10.

let num2 = 10;
let sum = 0;
let i=0
// while(i <= num2){
//     //console.log('current val', num2);
//     sum = sum + i;
//     console.log(sum)
//     i++;
// }

let total = (num2*(num2+1))/2 
console.log(total);  //Same out like above while loop


/****************do while**************** */

let z=0
do{
    console.log('z', z)
    z++
}while(z<= num2)

/***************For Loop************** */
for(let i=0; i<=num2; i++){
    console.log(i)
}

/********************Break & Continue Keyword********************* */

for(let i = 1; i<=10; i++){
    if(i===6){
        break;
    }
    console.log('Val', i)
}

for(let i = 1; i<=10; i++){
    if(i===6){
        continue;
    }
    console.log('Val', i)
}



