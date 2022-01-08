/*******************Block Scope and Global Scope****************** */
//In javascript document is global scope and function and variable is contained in this scope have global scope.
//A variable defined in a function have local scope which is then divided in two function scope and blok scope.


function func1(){
    if(true){
        let color1= "White";
        const color2 ="Red";
        var color3 ="Yellow"
    }

    console.log('Color1 is defined with let keyword its value is:', color1); //Will return error
    console.log('Color2 is defined with const keyword its value is:', color2); //Will return error
    console.log('Color3 is defined with var keyword its value is:', color3); //Ca
}

func1()





