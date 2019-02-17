// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = num => {
    let counter = 0;
    const recursive = num => {
        let num_array = num.toString().split('');
        if(num_array.length === 1){
            return;
        }
        else{
            counter ++;
            let array_product = num_array.reduce((start, next) => {
                return parseInt(start) * parseInt(next);
            });
            return recursive(array_product);
        }
    }; 
    recursive(num);
    return counter;
}

console.log(persistence(999));