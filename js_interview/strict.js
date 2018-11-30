'use strict'
/*
main purpose - 
    Enforce stricter parsing and error handling your code

    prevents the use of global variables.
    duplicate arguments.

*/
city = 'London';

console.log(city);

// function myFunc(a, a, b){
//     console.log(a, a, b);
// }

// myFunc(1,2,3);

delete Object.prototype;