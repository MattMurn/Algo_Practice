/*
what is logged out?
false - different values variables passed by reference
false - different values variables passed by reference 
*/

const user1 = {
    name: 'Jordan',
    age: 28
}

const user2 = {
    name: 'Jordan',
    age: 28
}

console.log(JSON.stringify(user1) == JSON.stringify(user2));
console.log(JSON.stringify(user1) === JSON.stringify(user2));