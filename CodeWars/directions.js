// import Bonds from '../Scope'
require('../Scope/app');
solve = (arr) => {
    /*
    there are three keywords. Begin, Left, Right
    reverse the array. 
    replace keywords
    return new array. 
    */
   // initialize holder array with 'begin'
    let holder = ['Begin '];
    // iterate through arr, back to front and add directions to holder
    for(let i = arr.length-1; i >= 1; i--){
        holder.push(arr[i].split(' ')[0] + ' '); 
    }
    // reverse array to get final directions
    arr.reverse();
    // iterate over array, take out the first word, and push to holder array
    // using i to correctly match elements.
    for(let i = 0; i <= arr.length-1; i++){
        let init = arr[i].split(' ');
        holder[i] = holder[i] + init.splice(1,init.length).join(' ');
    }    
    return holder;
}

console.log(
    solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"])
)
