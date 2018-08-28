const one  = [1,20,9];
const two = [3, 4, 10];

function solve(a0, a1, a2, b0, b1, b2) {
    /*
     * Write your code here.
     */
    let arrOneTally = 0;
    let arrTwoTally = 0;
    const arrayOne = [a0, a1, a2];
    const arrayTwo = [ b0, b1, b2];
    
    // arrayTwo.forEach(i => {
    //     console.log(i);
    // })
    for (let i = 0; i < arrayTwo.length; i++) {
        if(arrayOne[i] > arrayTwo[i]){ arrOneTally ++}
        else if(arrayOne[i] < arrayTwo[i]){ arrTwoTally ++}
    }
    
    
    return(arrOneTally, arrTwoTally);
}

solve(1,20,9,3,4,10);