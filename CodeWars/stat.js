// stat = strg => {
//     // your code
//     // take an array of string times, and get mean, range, and median
    
//     let final = []
//     strg.split(',').forEach(element => {
//         final.push(element.split('|').join('').trim());
//         // console.log(element.split('|').join(''))
//     })
//     final = final.sort((a,b) => a -b)
//     let range = final[final.length-1] - final[0];
//     console.log(range);
//     // .forEach(element => {
//         // console.log(element)
//         // element.split('')
//         // (element.split('')[0] === ' ') ? element.split('')[0].splice(1, 4, '0') : element.split('')[0];
//         // console.log(first)
//     ;
//     console.log(final)
//     // return true;
// }

// make a function that takes in a string and returns the time 
getTime = string => {
    console.log(typeof string)
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let number = string.toString().split('');
    console.log(number);
    if(number <60) {
        return number
    }
    number.replace('|', 'R')
    
}
getTime('time|')
getTime(1100);
getTime('1100');
getTime(true);


let test = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17";
// stat(test);
// module.exports = stat;