// Complete the minimumBribes function below.
// iterate through the array, if next element isn't sequential, add bribe.
// use the i in for loop to keep the queue relative.

function minimumBribes(q) {
    let startingArr = [...q].sort();
    let bribes = 0;
    for(let i = 0; i < q.length; i++){
        let diff = q[i] - startingArr[i];
        console.log(diff);
        if(diff > 2) return "Too chaotic";
        else if(diff > 0){
            bribes += diff;
        }
        
        // let currQue = i + 1;
        // if(q[i] > currQue + 2){
        //     return "too chaotic";
        // }
        // else {
        //     let diff = q[i] - currQue;
        //     bribes += diff;
        // }
    }
    return bribes;
}

console.log(minimumBribes([2,1,5,3,4]));