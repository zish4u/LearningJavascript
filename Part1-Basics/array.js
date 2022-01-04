/******************Array************************** */
//Arrey is reference type or object. 
// Array is muutable.
//push() method push element at the end (last index) of array.
//pop()  method will pop tha element from end (last index) of the array.
//unshift() method will add element ar first index of array.
//shift() method will remove element from first index.
//push and pop is faster than shift unshift.

let fruits = ["apple", "mango", "papaya"];

console.log(fruits);

fruits[1] = "banana";

console.log(fruits, fruits.length);


//Array can store any type of data.

let mixedArr = [1,2.6, "rose", undefined, null]
console.log(mixedArr)

let obj = {}

console.log(typeof mixedArr, typeof obj); //both is object type.

//Check if it is array
console.log(Array.isArray(mixedArr));  //true if array false if not.

let flowers = ['Rose', 'Jasmin', 'Lily']
console.log(flowers)
flowers.push('Marigold');
console.log(flowers);

let poppedFlower = flowers.pop();
console.log(poppedFlower)


let players = [4,6,8,10]
// players.unshift(1)
console.log(players)
let shiftedItem = players.shift()
console.log(shiftedItem);


//Difference between primitive and reference type.
let num1 = 7
let num2 =num1

console.log('num1 value is', num1)
console.log('num2 value is', num2)
num1++
console.log('num1 value is', num1)
console.log('num2 value is', num2)


let arr1 = ['item1', 'item2']
let arr2 = arr1;
console.log('value of arr1', arr1)
console.log('value of arr2', arr2)
arr1.push('item3')
console.log('value of arr1', arr1)
console.log('value of arr2', arr2)

//Array Cloning using different method.


//method1:
let array1 = ['product1', 'product2', 'product3']
let array2 = array1.slice(0)

console.log(array1)
console.log(array2)
console.log(array1===array2)

//method2:
let flowerArr1= ['Rose', 'Jasmin']
let flowerArr2= [].concat(flowerArr1)

console.log(flowerArr1)
console.log(flowerArr2)
console.log(flowerArr1===flowerArr2)

//method3: By use of spread operator.

let vehicle1 = ['Bus', 'Car', 'Bike']
let vehicle2 = [...vehicle1]
console.log(vehicle1)
console.log(vehicle2)
console.log(vehicle1===vehicle2)

//Note: Perfomance wise array.slice is faster.

//For lopp in array

let color = ['Red', 'Green', 'Yellow', 'Blue'];
let colorInUppercase =[]
for(let i=0; i<color.length; i++){
    console.log(`Color at index ${i} is ${color[i]}`)
    colorInUppercase.push(color[i].toUpperCase())
    console.log(`Color in uppercase array is ${colorInUppercase[i]}`)
}

/***********Let vs Const in array************* */

const numArr1 = [1,2,3];
// console.log(numArr1)
// numArr1.push(4);
// console.log(numArr1)
// numArr1 = [4,5]
console.log(numArr1) //Will throw error because numArr1 is const so we can push value but not assign value directly.

let numArr2 = [6,7,8]
console.log(numArr2);
numArr2 = [9,10]
console.log(numArr2); //will not throw any error because we are using let keyword.


//While loop in array.

let num = [1,2,3];
let i=0;

while(i<num.length){
    console.log(num[i]);
    i++;
}

//for of loop in array.

let students =['std1', 'std2', 'std3']
for(let student of students){
    console.log('Student', student);
}

//For in loop in array: This will return array index.

let className = ['sixth', 'seventh', 'eighth'];

for(let index in className){
    console.log(index)
    console.log(`Class at index ${index} is ${className[index]}`)
}

//Array destructuring.

let valArr = ['val1', 'val2', 'val3']

let [myVar1, myVar2, myVar3] =valArr

console.log('Val of myVar1', myVar1)
console.log('Val of myVar2', myVar2)
console.log('Val of myVar3', myVar3)

let [var1, ,var3] = valArr  //We can skip index
console.log(var1, var3);

let [var4, ...var5] = valArr
console.log('Var4', var4)
console.log('Var5', var5)