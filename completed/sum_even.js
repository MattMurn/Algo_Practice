/*
Write a function named sumEvenNumbers, taking an array of integers as single parameter. 
Your function must return the sum of the even values of this array.

For example, considering this input value : 
[4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).
*/

function sumEvenNumbers(input) {

    return input.reduce(function(previous, element) {
        return (element % 2 === 0) ? previous + element : previous;
    }, 0);

}
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

