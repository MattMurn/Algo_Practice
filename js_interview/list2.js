/*
--- two comments about this video..
59.
    spread operator can be used to pass data  by value.
    Determine 'list2' question part 2.
58.
    assignment of list1 = [10, 20, 30] is false b/c using const keyword
this is an example of passing data by value & passing data
by reference.

passing data by values is pretty straightforward:
    any time you declare of variable with a specific value
    type. string, int, bool... anything that is not an
    object, you are passing data by value.
passing data by reference occurs when the type is an object.
array, obj, function all have type object.
    the example below - 
    both list1 & list2 are referencing the same underlying array.
    this is a good example of how pointers are used to pass data by reference.
  
*/

const list1 = [1,2,3,4,5];
const list2 = [...list1];

console.log(list1, list2);
list1.push(6,7,8);
console.log(list1, list2);

// list1 = [10, 30, 500 ];

// console.log(list1, list2);



