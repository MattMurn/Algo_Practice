let { taxRounder } = require('./helperFunction');
const Tax = function(type, amount){
    this.type = type;
    this.amount = amount; 
}

module.exports = Tax;