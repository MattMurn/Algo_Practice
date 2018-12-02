/* 
what is going to be logged out first???
the order I would guess is: 
    1, 3, 4, 2
    1, 4, 3, 2

    event loop inside the browser...also there is a callback
    
    */


function logNumbers() {
    console.log(1);
    setTimeout(()=> console.log(2), 1000);
    setTimeout(()=> console.log(3), 0);
    console.log(4);
}
logNumbers();