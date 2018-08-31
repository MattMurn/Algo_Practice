/* 
    everytime a new number is found in the arr,
    add or create a subarray with num. needs to return an 
    array of arrays. keep in order of arr.

    [3, 2, 6, 2, 1, 3]
*/
const group = arr => {
    console.log(arr)
    // create array to hold subarrays
    let final = [];
    
    if(arr.length === 0){
        return final;
    }

    arr.forEach((element, i) => {
        final.forEach(subArray => {
            if(subArray.indexOf(element) >= 0){
                console.log(`pushing duplicate ${element}s`)
                subArray.push(element);
                return;
            }
        })
        
    })
    console.log(arr)
    
    console.log(final)
}

group([3, 2, 6, 2, 1, 3]);


