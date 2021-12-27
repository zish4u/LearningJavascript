let firstName = "Zishan"

console.log('Char at index 0 is', firstName[0])  // Will print Z
console.log('Char at index 1 is', firstName[1])  // Will print i
console.log('Char at index 3 is', firstName[3])  // Will print h

console.log('Length of string is', firstName.length) // Will print lenth of string i.e. 6.

console.log('Char at last index is', firstName[firstName.length-1])

let example = "    "

console.log('Length of example var with blank space', example.length)

//Note: In javascript Index count of string starts from 0 while length count starts from 1. White space inside "" considered as character.


/************************Useful String Methods************************ */

// trim(); this wil remove white space of string.

let studentName = '   Gautam Kumar    '
console.log('Length of string before trim',studentName.length)
studentName = studentName.trim(); //trim(); returns new string.
console.log('Length of string after trim', studentName.length)

let toUpper = studentName.toUpperCase();  //toUpperCase(); returns new string
console.log('String in uppercase', toUpper)

let toLower = studentName.toLowerCase();
console.log('String in lowercase', toLower)

let characterAt = studentName.charAt(3)
console.log('Character at position 3 is', characterAt) //

let stringData = 'Gautam'
let sliceString = stringData.slice(4, 6)  //It will start at 0 index and end at 4 index but not include 4 index and returne a new string.
console.log('String after slice', sliceString)

let replacedStr = stringData.replace('Gautam', 'Atif')
console.log('String replaced with new string', replacedStr)

let fullName = 'Atif,Gautam,Faiz'
let splitData = fullName.split(',')
console.log('It will split string with ,', splitData)

let stringPadding = '5' 
let strPadStart = stringPadding.padStart(8,0)
let strPadEnd = stringPadding.padEnd(8,"#")
console.log('String after padStart', strPadStart);
console.log('String after padStart', strPadEnd);


/************************String Conversion*********************************** */

// Method1: String to number, number to string conversion
let age = 45;
let stud_name ="Faiz"
console.log('Type of age is:', typeof age)
console.log('Type of name is:', typeof stud_name)

console.log("Type of age is", typeof (age+ '')) //Number to string conversion

let Age = "30"
console.log("Type of Age is", typeof +Age)  //String to number conversion by just adding + sign 

// Method2: String to number, number to string conversion

let persons = 5;
let result = String(persons)
console.log('Type of persons after conversion is:', typeof result)

let quantity = '8';
let resul = Number(quantity)
console.log('Type of quantity after conversion is:',typeof resul)


/***********************String Concat***********************/

let num1 = "17";
let num2 ="10";

let numb = num1+num2
console.log('String after concat', numb)

let nmber = +num1 + +num2
console.log('String after concat', nmber)


/******************Template String*******************/


let friendName = 'Gautam';
let friendage  = 30;

let aboutFriend = friendName + " " +"is my friend his age is "+friendage + " and " + "he is a banker." 
console.log(aboutFriend);

let aboutGautam = `${friendName} is my friend his age is ${friendage} and he is a banker.`
console.log(aboutGautam);

