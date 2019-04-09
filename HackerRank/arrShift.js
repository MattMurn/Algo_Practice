// Complete the rotLeft function below.
/*
Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

An array of integers a.
An integer a, the number of rotations.
*/
function rotLeft(a, d) {
    let final = a;
    for(let i = 0; i < d; i++){
        final.push(final[0]);
        final.shift();
    }
    return final;
}

console.log(rotLeft([1,2,3,4,5], 4));
// let test2 = "33 47 70 37 8 53 13 93 71 72 51 100 60 87 97";
// console.log(rotLeft(test2.split(" "),13));
