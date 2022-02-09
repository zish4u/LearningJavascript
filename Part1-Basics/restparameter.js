function func1(a, b, ...c){
    console.log('Value of a', a);
    console.log('Value of b', b);
    console.log('Value of c', c);
}

func1(2,3,5,6,9,1)


function sumOfAllParams(...number){
    let sum = 0
    for(let num in number){
        sum = sum+number[num]
    }
    return sum;
}

console.log(sumOfAllParams(1,2,3,8,3));