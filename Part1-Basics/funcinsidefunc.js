/*******************We can call function inside function.************************* */
function funcOne(){
    function funcTwo(){
        console.log("Function Two is called");
    }

    const funcThree =()=> console.log("Function Three is called");  //Arrow function

    function funcFour(){
        funcThree()
        console.log("Function Four is called");
    }
    console.log('Func One is called');
    funcTwo()
    funcFour()
}

funcOne()