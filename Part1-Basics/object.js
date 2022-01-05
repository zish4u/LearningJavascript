/****************Object**************** */
//Object is a refernece type
//Object doesn't have indexes
//Object represent real world data.
//Object stores data in key value pair.

let person = {name: 'zishan', weight: 65};
let keyName = 'email'
console.log(person);

//Adding new key value pair in object.

person.gender = 'male'
console.log(person)

//We can also add array in object.
person.hobbies = ['Traveling', 'Listening Song', 'Reading Book']
console.log(person);

//We can access object by dot or bracket notation.
console.log(person.name)
console.log(person["weight"])
person[keyName]='zish4u@gmail.com'
console.log(person);

//Object iteration.

for(let key in person){
    console.log(person[key]);
    console.log(`${key}: ${person[key]}`);
}

//To get keys of objects.
console.log('Keys', Object.keys(person));
console.log('Type', typeof (Object.keys(person)));
console.log('is Array?', Array.isArray(Object.keys(person)));


//Computed Properties.


const key1 = "objkey1";
const key2 = "objkey2";
const val1 = "value1";
const val2 = "value2"

//1st Method
const obj ={}
obj[key1] = val1
obj[key2] = val2
console.log(obj)

//2nd Method
const obj1 ={
    [key1]: val1,
    [key2]: val2
}

console.log(obj1)

/****************Object Destructuring*****************/

const team = {teamName: 'Rider', ageGroup: 11};

const {teamName, ageGroup} = team   //By default variable name should be same as keyname.

console.log('Default variable name should be same as key name',teamName, ageGroup)

const {teamName: var1, ageGroup: var2} = team //If we want to use another name for variable then we can as key value.

console.log(var1, var2); //here variable name is var1, var2

const color = {name: 'white', code: '#fff', rgb: '255,255,255'}

const {name, ...restProp} = color

console.log(name, restProp);
