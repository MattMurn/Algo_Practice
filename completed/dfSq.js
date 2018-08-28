
differenceOfSquares = (n) => {
    let nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i);    
    };
    let sum1 = nums.reduce((element, next) => {return element + next * next },0);
                 
    let sum = nums.reduce( (accum, next) => {return accum + next}, 0);
    
    return (sum * sum) - sum1;
    
}

differenceOfSquares(10)

module.exports= differenceOfSquares;