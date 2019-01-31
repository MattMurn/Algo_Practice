// given a set of numbers create a function that returns the smallest.
let test_case = [544,3,22,32]
smallest = (arr) => {
    let min = arr[0]
     arr.forEach((el,i) => {
        if(el < min){
            min = el;
        }
    })
    return min;
}
second_smallest = (arr, i) => {
    // if(i <= arr.length){
    //     return false;
    // }
   let sorted = arr.sort((a, b)=> a -b);
   return sorted[i-1];
}
// console.log(smallest(test_case));
console.log(second_smallest(test_case, 5));

/* 

given two arrays. return an array that contains elements that
appear in both arrays

*/

function equality(s1, s2) {
    // iterate over smaller array, using 'indexOf' method to find if element is in larger array.
    let final_array = [];
    // s2.forEach(function(el, i){
    //     if(s1.indexOf(el) > -1 && final_array.indexOf(el) === -1){
    //         final_array.push(el);
    //     }
    // })
    // return final_array;
    function recursive(x=0) {
        if(x === s2.length){
            return 0;
        }
        if(s1.indexOf(s2[x]) > -1 && final_array.indexOf(s2[x]) === -1){
            final_array.push(s2[x]);
        };
        return recursive(x + 1)
    }
    recursive();
    return final_array;
}
console.log(equality([123,2,3,4,5], [12,3,4,4,5]));

