let person = {name:'Gautam', gender: 'Male'}

function one(person){
    console.log(person.name);
    console.log(person.gender);
    console.log(person.age);
}
one(person)


//Now we can achiev above result by parameter destructuring.

function funcTwo({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

funcTwo(person)

