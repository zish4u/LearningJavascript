//Var, Let, const keyword

var age = 40;
var age = 30;

console.log(age)  // It will run perfectly because var keyword has global scope.

let firstName = "Atif"
// let firstName = "Gautam"
console.log(firstName)  //This will 'Identifier 'firstName' has already been declared' error because let keyword has block scope.


//const keyword
const pi= 3.14

pi = 3.20
console.log(pi)  //Will throw error cause we can not change the const value.




function hello(){
    if(true){
        var a = 'Javascript';
        let b = 'Python';
        const c = 'Java'

        console.log('Inside if statement var keyword',a)
        console.log('Inside if statment let keyword',b)
        console.log('Inside if statment const keyword',c)
    }

    //console.log('Outside if statement var keyword: ',a)  //It will print because var has function scope while let and const has block scope.
    console.log('Outside if statment let keyword:',b)
    console.log('Outside if statment const keyword: ',c)
}

hello()