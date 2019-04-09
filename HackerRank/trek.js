// Complete the countingValleys function below.
function countingValleys(n, s) {
// increment count for every step
// if count = 0, and step down, increment valley count.
// return count;
    let valleys = 0;
    let currSteps = 0;
    s.map(step => {
        if(step === "D" && currSteps === 0){
            valleys ++;
        }
        if(step === "D"){
            currSteps --;
        }
        if(step === "U"){
            currSteps ++;
        }
    })
    return valleys;
}

console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]))