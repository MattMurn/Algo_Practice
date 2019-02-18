
const rounder = function(amount){
    return Math.round(amount*100)/100;
};
const taxRounder = function(amount){
    return Math.round(amount/.05)*.05; 
}

module.exports = {
    rounder: rounder,
    taxRounder: taxRounder
}