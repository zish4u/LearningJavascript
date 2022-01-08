/*--------------------Lexical Scope-------------------------------*/
// Lexical scope is the definition area of an expression.In other words, an item's lexical scope is the place in which the item got created.

function func1(){
    let person = "Gautam"
    function func2(){
        let person = "Atif"
        function func3(){
            let person = 'zish'
            return person
        }
        console.log('Inside Func3 person name is ', func3());
        return person;
    }
    console.log('Inside Func2 person name is ', func2()); 
    return person;
}

console.log('Inside Func1 person name is ', func1());