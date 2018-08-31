const factorial = num => {
    if(num === 0){
        return 1;
    }
    else if(num <= 1){
        return num;
    }
    return num * factorial(num-1);
}

console.log(factorial(71));