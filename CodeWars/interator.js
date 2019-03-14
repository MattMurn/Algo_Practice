/*
Implement an iterator which receives an array of values, and returns an object with:

a function next
a number index
A call to the next function should return an object with 2 attributes:

value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
done (boolean which specifies whether the input array has been fully processed)
Accessing the index attribute should return the index of the value currently held by the iterator.


*/

const createIterator = array => {
    let final = {};
    for(let i = 0; i <=array.length; i++){
        final[i] = {
            index: i,
            next: {
                value: i + 1 || undefined,
                done: false
            }
        }
        if(final[i-1]){
            final[i-1].next.done = true;
        }
    }
    return final;
}