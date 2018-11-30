var num = 50;

function logNum(){
    console.log(num);
    // var num = 100;
};

logNum(); // undefined b/c of functional scope & hoisting.
var x = 10;
function logger(){
    
    console.log(x);
    var x = 15;
    console.log(x);
    x = 20;
    console.log(x);
}

logger();