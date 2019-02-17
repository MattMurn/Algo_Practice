let round = require('./helperFunction')

const Item = function(name, quantity, price, origin, type){
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.origin = origin;
    this.type = type;
    this.itemSubTotal = function(){
        return round(this.price * this.quantity);
    };
    this.itemTax = function() {
        if(this.type === 'book' || this.type === 'food' ||this.type === 'medical'){
            return 0;
        }
        else {
            return round((this.price * this.quantity) * this.origin.amount);          
        }
    }
    
}

module.exports = Item;
