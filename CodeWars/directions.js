 solve = (arr) => {
    /*
    there are three keywords. Begin, Left, Right
    reverse the array. 
    replace keywords
    return new array. 
    */
   let defent = arr.reverse();
    return defent.split('');
}

console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]))