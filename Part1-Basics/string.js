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
