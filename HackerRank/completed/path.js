/*
 * Complete the function below.
 */
const array = [[1, 10], [1, 6], [2, 8], [3, 5]]
function maxFlorists(pathLength, floristIntervals) {
    const newRange = [];
    if(floristIntervals.length <= 3){
        return floristIntervals.length;
    }else {
        floristIntervals.map( interval => {
            if (interval[1] > pathLength){
                // adjusting for array index[0]
                interval[1] =pathLength+1;
            };
            let currentRange = [];
            for(let i = interval[0]; i < interval[1]; i++){
                currentRange.push(i);
            }

            newRange.push(currentRange);

        })
    }
    //find the array with overlapping numbers 
    let overlapNumbers = 0;
    let firstThreeFlorists = []
    newRange.reduce((current, next) => { 
        if(firstThreeFlorists>= 3){
            break;
        }
        for (let i = 0; i < pathLength; i++) {
            if(current[i] === 1){
                overlapNumbers++;
                firstThreeFlorists.push(current);
                break;
            }
        }

    })
    return firstThreeFlorists;
}

maxFlorists(9, array);

