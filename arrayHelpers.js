// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

/*
psuedo / ideas => 
    try adding prototype methods to either the locally defined array object. This should work 1 time for that specific array, 
    but to scale and re use, add protoype methods to the global Array object for easier reuseablility. (similiar to forEach,filter, etc.)

    Having an issue, method needs to be self referencing, should not take an argument.
    Need a callback to fire using "this".
    check out to see if the Array object has specific properties that are used to store the array.
*/
let numbers = [1,2,3,4,5,6,7,8,9,10 ]

Array.prototype.square = () => {
    console.log(this);
    console.log(numbers);
    // return x.forEach(element => element = element * element);
}
numbers.square();
Array.prototype.cube = (x) => {
    return x.forEach(element => element = element * element * element);
};
Array.prototype.average = x => {
    if(x = []){
        return NaN;
    }
    return x.reduce((prev, cur) => {
        return prev + cur;
    }, 0) / 2;

}
Array.prototype.sum = x => {
    return x.reduce((prev, cur) => {
        return prev + cur;
    })
}

Array.prototype.even = x => {
   return x.filter(el => el % 2 === 0);
}

Array.prototype.odd = x => {
    return x.filter(el => el % 2 !== 0);
}
numbers.average([])
// numbers.average(numbers);
// numbers.odd(numbers);
// numbers.square([1,2,3,4,5]);
// numbers.cube();

// square = array => {
//     let test = array.forEach(element => {
//         element = element * element;
//     });
//     console.log(test);
// }
// square(numbers);
// numbers.square();
// console.log(numbers)

// module.exports = arrayHelpers;
