fizzBuzz = () => {
    
    for(let i= 1; i <= 100; i++){
        (i % 15 === 0) ? console.log(`FizzBuzz ${i}`) : '';
        (i % 3 === 0) ? console.log(`Fizz ${i}`) : '';
        (i % 5 === 0) ? console.log(`Buzz ${i}`): '';
    }
}

fizzBuzz();


for (i=1; i<=100; i++) {
    if (i%15 === 0) {
    console.log ("FizzBuzz");
}       
    else if (i%3 === 0) {
    console.log ("Fizz"); 
}
    else if (i%5 === 0) {
    console.log("Buzz");
}
            
    else {
    console.log(i);
}    
}