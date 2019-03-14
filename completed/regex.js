let homeArray = ['a bunch of strings', 'that has a lot of a',
                 'and a lot of pull', 'and a lot of this', 
                 'and a lot of that'
                ]

const checkFor = arr => {
    let regexWord = /[a-e]/;
    let counter = 0;
    let empty = [];
    arr.forEach(element => {
    (regexWord.test(element)) ? counter ++ : '';
//    console.log(element.match(regexWord))
    })
    console.log(counter);
}
// checkFor(homeArray);
let chars = /beans/gi;
let string = 'this has beans, beans, a long day, beans for dinner, its been a while';
// let result = string.match(chars);
// console.log(result)
// console.log(result.filter(el => el.split('').length = 5));
let ohStr = "Ohhh no";
let ohStr2 = "Ohhh no";
let ohStr3 = "Ohhhhhhh no";
let ohRegex = /h{3,5}/; // Change this line
// let result = ohRegex.test(ohStr);
let r2 = ohRegex.test(ohStr3)
// console.log(r2)
let repeatNum = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
// console.log(result)
let stringrepo = "this is a test string";
// console.log(stringrepo.substr(0,3))
let changed = stringrepo.replace('this', 'that');
// console.log(changed)
let hello = "   Hello, World!  ";
let wsRegex = /^\s*\w+,\s\w+!\s*/; // Change this line
let sult = hello.match(wsRegex); // Change this line
let testReg = wsRegex.test(hello)
// console.log(sult)
// console.log(testReg)
function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    let filtered =arr.filter(a => a.indexOf(elem) > -1);
    newArr = [...filtered]
    // change code above this line
    return newArr;
  }
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(el => {
      return (el > 0 && Number.isInteger(el))* el
    });
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//console.log(squaredIntegers);


