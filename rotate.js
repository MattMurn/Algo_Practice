/*The input is a string str of digits. 
Cut the string into chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its
 digits is divisible by 2, reverse that chunk; otherwise rotate it to 
 the left by one position. Put together these modified chunks and 
 return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
*/
const sumCube = chunk => {
    let total = 0;
    let chunkArr = chunk.split('').forEach(element => {
         return total += Math.pow(element, 3);
    });
    return total;
    // if( total % 2 === 0){
    //     console.log(chunk.split('').reverse().join(''));
    // }
    // else {

    // }

}
sumCube('233');
const revrot = (str, sz) => {
    // your code
    let iterator = Math.ceil(str.split('').length/sz);
    let chunk = 0;
    let final = ''
    for(let i = 0; i <= iterator -1; i++){
        // console.log(`before: ${chunk}`)
        let total = str.substring(chunk, (chunk + sz));
        // console.log(` Chunk: ${total}`)
        // console.log(sumCube(total));
        if( sumCube(total) % 2 === 0){
            final =+ total.split('').reverse().join('');
        }
        else {
            console.log(`False ${total}`)
        }
        chunk += sz;
        // console.log(`after: ${chunk}`)
    }
    if(sz <= 0 || str === "" || sz > str.split('').length) {
        return "";
    };


}


revrot('144411224414',2)