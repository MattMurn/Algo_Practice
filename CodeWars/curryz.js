/*
write a sum method which will work properly when
invoked using either syntax below.
curry.
*/

function sum(a) {
    // if(arguments.length === 2){
    //     return arguments[0] + arguments[1];
    // }
    // else {
        return function inner(b){
            return a + b; 
        }        
    // }
}
// let test1 = sum(4);
// console.log(typeof(test1()));
// // console.log(test1(293));

function close(start, num){

    let count = start;

    function increment(){
        return count+= num;
    }
    function decrementCount(){
        return count-= num;
    }
    return {
        increment: function() {
            increment()
        },
        decrement: function() {
            decrementCount();
        },
        value: function(){
            return count;
        }
    }
}

let new_count = close(10, 7);
let two_count = close(0,180);
two_count.increment();
two_count.increment();
console.log(two_count.value());
two_count.decrement();
console.log(two_count.value());
new_count.increment();
new_count.increment();
console.log(new_count.value());
new_count.decrement();
console.log(new_count.value());
