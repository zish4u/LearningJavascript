/*******************Array Foreach Method*******************/

//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.


let number = [2,4,7,8]

function multiplyBy2(number, index){
    console.log(`Index of ${number} is ${index}, and multiple is ${number*2}`);
}

// for(let i=0; i<number.length; i++){
//     multiplyBy2(number[i], i)
// }

//Above example we can achieve by using foreach very easily.
number.forEach(multiplyBy2) 


//We can also add callback function inside foreach.
const num = [1,9,13,20]
num.forEach(function(number, index){
    console.log(`Index of ${number} is ${index}, and multiple is ${number*2}`);
})


//Example3: Print first name of every use.
const users = [
    {firstName: 'Gautam', age: 20, gender: 'male'},
    {firstName: 'Atif', age: 25, gender: 'male'},
    {firstName: 'Faiz', age: 22, gender: 'male'},
]

users.forEach(function(user){
    console.log('User name is ', user.firstName);  //We can skip index in foreach if not required.
})


//We can also do above example by using arrow function.

users.forEach((person)=>{
    console.log('User is', person.firstName);
})


/*************************Array Map function*********************** */
//Map returns a new array while for each doesn't returns


const numb1 = [1,2,3,4,5,6,7]

const square = numb1.map((number)=>{
    return number*number
})

console.log('Square of numbers:',square);


//Example:

const persons = [
    {name:'Atif', age:25, gender: 'male'},
    {name:'Gautam', age:24, gender: 'male'},
    {name:'Faiz', age:23, gender: 'male'},
]

const usersName = persons.map((person)=>{
    return person.name
})

console.log(usersName);




/**********************Filter Method************************/
//Filter method does not execute the function for empty elements.
//Filter method does not change the original array.
//Filter method creates a new array filled with elements that pass a test provided by a function.


const numb2 = [1,2,4,6,7, 9,13,14]

//Method1
function evenNumber(number){
    return number%2 === 0;
}

console.log('Array of even number is: ', numb2.filter(evenNumber));


//Method2: Using arrow function.
const isEven = numb2.filter((number)=>{
    return number%2 ===0;
})

console.log(isEven);

const numb3 = [2,2,4,3,5,6,5]

// const dup = numb3.filter((num, index)=>{
//     console.log(`First occurance of ${num} is at position ${numb3.indexOf(num)} and index is ${index}`);
//     return numb3.indexOf(num)!==index;
// })

// console.log('Duplicate',dup);

let dupArr = []
numb3.forEach((num, index)=>{
    console.log(num, index)
    if(numb3.indexOf(num) !== index){
        dupArr.push(num);
        console.log("Arr", dupArr);
    }
})


// console.log("Dup", du)


/*******************Array Reduced Method****************/
const numberArray = [1,2,3,4,5,6];

const sum = numberArray.reduce((previousNumber, currentValue)=>{
    return previousNumber+currentValue;
})

console.log('Sum of array element', sum);

//We can also pass initial value in reduce method. See below example.

const withInitialValue = numberArray.reduce((prevNum, currValue)=>{
    console.log(`Prev Numb: ${prevNum}, Curr value: ${currValue}`);  
    return prevNum+currValue
}, 100)

console.log('withInitialValue', withInitialValue);

//Sort Method: It change the actuall array andreturns value after sorting.

const sortNum = [2, 1200,8,6,3,7500]

//This will not return accurate sorting because it sort as per the ascii key value of first digit.
//sort method sort number as a string.
console.log(`Array is: ${sortNum} and after sorting:` ,sortNum.sort()); 

const sorted = sortNum.sort((a,b)=>a-b)  //This will return accureate sorting in ascending order, for decending order we should use "b-a".
console.log(sorted);

const sortLetter = ['cd', 'azv', 'sdf', 'bca', 'nam'] 

const sortedLetter = sortLetter.sort(); // It will sort accurately 
console.log(sortedLetter);

const sortLetter1 = ['cd', 'DMO', 'sdf', 'ASD', 'nam'] 

const sortedLetter1 = sortLetter1.sort(); // It will sort uppercase first because ASCCII value of capital letter is less than small letter.
console.log(sortedLetter1);


/********************Find Method**************** */

const animal = ['CAT', 'DOG', 'HYNA', 'DEER']

console.log(animal.find((str)=> str.length===3)); //It will return first occurance only.

/***********************Every Method************************* */

const evenNum = [2,4,6,8,9]

console.log(evenNum.every(num=>num%2===0)) //It will return false because one item i.e 9 in array is not even.


/**************************Some Method********************************** */

console.log(evenNum.some(num=>num%2===0)); //This will return true becaus some elemnet is even number.


/**************************Fill Method********************** */
// Fisrt is value,
//second is start index,
//And third is end index.

const exam = [2,5,6,8,9]

console.log(exam.fill(1, 0, exam.length)); // This will return [ 1, 1, 1, 1, 1 ]

/**************************Splice Method********************** */
// First is Index of item to be delete,
// Second is number of item to delet
// item to be insert.

const itemArray = ['item1', 'item2', 'item3']

//Delete item2.
itemArray.splice(1, 1)

console.log(itemArray); //item2 index is 1, and 1 item to delete.

//Insert an item.

itemArray.splice(0, 0, 'inserted item at 0 index')
console.log(itemArray);


//Delet 2 item and isert 2 item.

const product = ['p1', 'p2', 'p3'];

product.splice(1, 2, 'p4', 'p5')

console.log(product); //Output [ 'p1', 'p4', 'p5' ].
