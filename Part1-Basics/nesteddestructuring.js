/****************Nested Destructuring***************** */


const users = [
    {userId:1, userName: 'Zish', gender: 'male'},
    {userId:2, userName: 'Gautam', gender: 'male'},
    {userId:3, userName: 'Atif', gender: 'male'}
]
console.log(users);

const [user1, ,user3] = users  //If we want to destructe entire array
console.log(user1, user3);

const [{userName}, user2, {gender}] = users //If we want to destructe object inside array.

console.log(userName, gender);

const [, {userName:username, userId}, {gender: userGender}] = users //We can change the variable name.

console.log(username,userId, userGender);
