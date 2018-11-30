/*

*/

function getProduct(num1, num2){
    return num1 * num2;
}

function curriedProduct(num1){
    return function(num2){
        return num1 * num2;
    }
}

console.log(curriedProduct(10)(20));

function getTravelTime(distance, speed){
    return distance / speed;
};

console.log(getTravelTime(600, 50));


function travel(distance){
    return function(speed){
        return distance / speed;
    }
}

const to_nyc = travel(400);

console.log(to_nyc(100));
console.log(to_nyc(50));