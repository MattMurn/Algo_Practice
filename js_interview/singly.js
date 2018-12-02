/*
this is a kind of wild hack that doesn't make any sesne...
so the arguments is a built in keyword.
and parameters passed as a function are an array. which exposes
us to the array object. So technically its not nececssary to 
add arguments when defining as function...

*/

function getTotal(){
    var args = Array.prototype.slice.call(arguments);
    // console.log(arguments);
    // console.log(args);
    if(args.length > 1){
        return args.reduce((aggregator, element)=> aggregator + element,0)
    }
    else if(args.length === 1){
        return function(num2){
            return args[0] + num2;
        }
    }
    else {
        return args[0];
    }
}

console.log(getTotal(10,20, 30));
console.log(getTotal(10)(20));
// (getTotal(10)(20));

