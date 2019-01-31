// 'use strict';
// (()=>{
//     var x = y = 200;
// })();

// console.log(y);
// console.log(x);


var x = 10;

function y(){
    x = 100;
    return;
    function x() {};
}

console.log(y());
// x = 100 b/c it is reassigning a  global variable and not declared
console.log(x);