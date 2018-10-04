arrDiff = (...numbers) => {
    if(numbers.length < 2){
        return [];
    }
    let numObj = {};

    let final = [];
    for(let i =0; i <= numbers.length-1; i++){
        for(let j =0; j <= numbers[i].length-1; j++){
            if(numbers[i][j] in numObj){
                numObj[numbers[i][j]] ++;
            }
            else {
                numObj[numbers[i][j]] = 1;
            }
        }
        final.push(numbers[i].reduce((s, n)=> s +n));
    }
    for(let n = 0; n <= numbers.length -1; n++){
        for(num in numObj){
            if(numObj[num] > 1){
                numbers[n].splice(numbers[n].indexOf(numObj[num]), 1);
            }
        }
    }

    // console.log(numObj)
    // console.log(numbers);
    return [final.reduce((s, n) => s -n)];
}

// console.log(arrDiff([2,3,3], [3]))

console.log(arrDiff([3,4, 10], [3], [3,1]))
// console.log(arrDiff([]))
