function track(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

console.log(track());
console.log(track());
console.log(track());

const instanceOne = track();
const instanceTwo = track();

console.log(instanceOne());
console.log(instanceOne());
console.log(instanceOne());
console.log(instanceOne());
console.log(instanceOne());

console.log(`instanceTwo: `, instanceTwo());
console.log(`instanceTwo: `, instanceTwo());
console.log(`instanceTwo: `, instanceTwo());
console.log(`instanceTwo: `, instanceTwo());
