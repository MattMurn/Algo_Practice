/* 
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
*/

function sortArray(array) {
    let final = [];

    let ok = 0
    let arrayFilter = array.filter((element) => (element % 2 !== 0));
    arrayFilter.sort((a, b) => {return a-b});
    array.forEach(element => {
        
        if (element % 2 !== 0) {
            element = arrayFilter[ok];
            ok ++;
        }
        final.push(element);
        
    });

     return final;
}


