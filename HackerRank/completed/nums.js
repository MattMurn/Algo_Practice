function plusMinus(arr) {
    let posInt = 0;
    let negInt = 0;
    let zeros = 0;
    let denom = arr.length;
    for (let i = 0; i < denom; i++){
        if (arr[i] > 0) posInt++;
        else if (arr[i] < 0) negInt++;
        else zeros++;
    }
    posInt = (posInt / denom);
    console.log(typeof(posInt));
    // return posInt.toFixed(6);
    negInt = (negInt / denom);
    zeros = (zeros / denom);
    console.log(
        posInt.toFixed(6),
        negInt.toFixed(6),
        zeros.toFixed(6)
    )

}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))