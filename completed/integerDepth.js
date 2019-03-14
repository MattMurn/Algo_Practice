const computeDepth = x => {
    let depth_array = [];
    let count = 1;
    while(depth_array.length < 9){
        let product_array = (x*count).toString().split('');
        for(let i = 0; i <= product_array.length-1; i++){
            (depth_array.indexOf(product_array[i])< 0) ? depth_array.push(product_array[i]) : null
        }
        (depth_array.length < 10) ? count ++ : null ;
    }
    return count;
}

console.log(computeDepth(443));

