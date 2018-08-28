const array = [2,3,4,55,1,2,3,45,66]
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    const final = ar.reduce((initial, nextValue) => initial + nextValue);
   
    console.log(final);

}

simpleArraySum(array);
