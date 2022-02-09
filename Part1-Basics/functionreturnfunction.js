/*****************Function returning function***************** */

function funcOne(){
    function hello(){
        return "Hello World"
    }

    return hello
}

const callFunc = funcOne()

console.log(callFunc);
console.log(callFunc());

function funcTwo(){
    return function funcThree(){
        return "Hello User";
    }
}
const var1= funcTwo()
console.log(var1());



