// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: [2]

// Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
// Output: [2,4,6]

// Input: [1,2,3,4,5,6]  function(num){return num > 3}
// Output: [4,5,6]

const evalFuction = (arr, cb) => {
    let filteredArr = [];
    for(let i = 0; i <= arr.length-1; i++){
        let test = cb(arr[i]);
        if(test){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(evalFuction([1,2,3], (num) => num === 2));
console.log(evalFuction([1,2,3,4,10,500], (num) => num % 2 === 0));
console.log(evalFuction([1,2,3,7,6,5,32,34,0], (num) => num > 3));

const shortElavFunction = (arr, cb) => {
    return arr.map(element => element ? element: null);
    return arr.filter((element) => cb(element)); 
}



console.log(shortElavFunction([1,2,3], (num) => num === 2));
console.log(shortElavFunction([1,2,3,4,10,500], (num) => num % 2 === 0));
console.log(shortElavFunction([1,2,3,7,6,5,32,34,0], (num) => num > 3));