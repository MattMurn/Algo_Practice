console.log([10, 20, 30, 40, 50].indexOf(30)); //2
console.log([{name: 'Pam'}, {name: 'Kent'}].indexOf({name: 'Kent'})); // undefined - passed by reference
console.log('hello world'.indexOf('o')); // 4 indexOf method on string type
console.log([[1], [2], [3], [4]].indexOf([2])); // undefined - passed by reference.



// equivalent numbers 
// 97 & 98 have different code
// false because js has difficulty evaluating decimal numbers
// goes down to a binary level.
//toFixed();
console.log(3 === 3 * 300.3);

console.log(parseInt((300.3 * 3).toFixed(2)));