/* Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
 The sum of the squared divisors is 2500 which is 50 * 50, a square! Given two integers m, n (1 <= m <= n)
  we want to find all integers between m and n whose sum of squared divisors 
 is itself a square. 42 is such a number. The result will be an array of arrays or of tuples 
 (in C an array of Pair) or a string, each subarray having two elements, first the number whose 
 squared divisors is a square and then the sum of the squared divisors.
*/
/// this works, codewars says its too slow as it tests over 15 times.
function listSquared(m, n) {
    
    
    const final = [];
    onceThrough = counter => { 
        
        const holder = [];         
        for( let i = 1; i <= counter; i++){
            if(Number.isInteger(counter/i)){
                holder.push(i*i);
            }        
        }
        const reducer = holder.reduce((first, second) => {
            return first + second;
        },0);
        let sqr = Math.sqrt(reducer);
        if(Number.isInteger(sqr)){
             final.push([counter, reducer]);
             
        }
    }
    for(let x = m; x<= n; x++){
        onceThrough(x);
    }
    return final;
}



module.exports = listSquared;