const es6_fun = (arr, num) => {
     return arr.map(element => element * num);
}
function regular_fun(arr){
    var final_arr = [];

    for(var i=0; i <arr.length; i++){
        final_arr.push(arr[i]*2);
    }
    return final_arr;
};


console.log(array_fun([1,2,3,4,6], 20));
console.log(less_fun([1,2,3,4,6]));