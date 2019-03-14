//every() some() find() findIndex() forEach() map() filter();
let forExample = [43,5,6,7,82,12,34,6];
let stringExample = "Thisisatest";
/* sort() 
    sorts elements and returns in an array.
    takes 1 argument:
        comparison function - defines the sort order.
            the default is ascending based on unicode point.
*/
exampleSort = example => {
    console.log(example.sort());
    let ascending = example.sort((a, b) => {
        return a - b;
    })
    console.log(ascending);
    let descending = example.sort((a, b) => {
        return b - a;
    })
    console.log(descending);
}

// exampleSort(forExample);

/*forEach - takes 3 arguments:
    currentValue,
    currentIndex,
    array that is being iterated over.

    forEach is called for ever element in the array and callback is envoked.
    unlike REDUCE AND MAP, it always returns undefined and is unchainable.
    */

exampleForEach = forExample => {
  forExample.forEach((element) => {
    console.log(element);
    console.log('--------')
  })  
}


/* .filter() iterates over an array, then a conditional, which, if met, is 
put in the "filtered" array.

-- any elemenet appended to the array after the callback has been evoked will not be used in .filter();
*/

 exampleFilter = forExample => {
    
    const exampleResult = forExample.filter( element => (element < 25) && (element % 2 ===0));

    console.log(exampleResult);


 }
// exampleForEach(stringExample.split(','));
//  exampleFilter(forExample);


/* .reduce() takes an array and runs a function against an accumulator
 and each element in the array to reduce it to a single value.

 
 the callback takes in 4 arguments - 
    accumulator(place where newer values are stored during iterations).
    currentElement (index) that is being processed.
    currentValue that is held at the currentElement.
    array that is being iterated over.
    *** not really an argument*** initVal value that is used in 1st callback. if there is no init value, 
        starts at the 1st element. 
        so if you don't pass an init value, [0] is going to be skipped. no bueno.

        ==== really good example of how to use reduce for object sorting. "groupBy"
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 

 */

 exampleReduce = forExample => { /*  try using an array of objects next time*/
     let reducer = forExample.reduce((accumulator, currentValue) => accumulator + currentValue, 1000);
     console.log(reducer);
 }

//  exampleReduce(forExample);


 // friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
  // allbooks - list which will contain all friends' books +  
  // additional list contained in initialValue
  var allbooks = friends.reduce(function(accumulator, currentValue) {
    return [accumulator, currentValue.books];
  }, "Jerry");
  
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

  console.log(allbooks)


joinSplit = example => {
    // let join = example.join();
    // let split = example.split();
    console.log(join);
    console.log(split);
     
}

// joinSplit(forExample);


/* spread operator for es6
    when you want to pass an array as a function argument.
*/

sum = numz => {
    numz.reduce((el, to) => {
        return el + to
    }, 0)
}

const numbers = [2,3,45];
console.log(sum(...numbers))
console.log(sum(...numbers))