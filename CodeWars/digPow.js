/*
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
*/

function digPow(n, p) {
    let digits = n.toString().split("");

   let final = digits.reduce((accumulator, num, currIndex) => {
        return accumulator +  Math.pow(num, p+currIndex);
    },0);

    return ((final/n % 1) === 0) ? final/n: -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));