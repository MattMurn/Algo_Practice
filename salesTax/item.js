let { rounder, taxRounder } = require('./helperFunction')

const Item = function(name, quantity, price, tax, type){
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.tax = tax;
    this.type = type;
    
    this.itemSubTotal = function(){
        return rounder(this.price * this.quantity);
    };
    this.importTax = function(){
        if(this.tax.type === 'import'){
            return (this.price * this.quantity)*.05;
        }
        else {
            return 0;
        }
    }
    this.domesticTax = function() {
            if(this.type === 'book' || this.type === 'food' ||this.type === 'medical'){
                return 0;
            }
            else {
                return (this.price * this.quantity) * .1
            }
    }
    this.totalTax = function(){
        switch(this.tax.type){
            case 'import':
                // console.log(taxRounder(this.domesticTax() +this.importTax() + this.price));
                return taxRounder(this.importTax()) + taxRounder(this.domesticTax());
            case 'domestic':
            // console.log(taxRounder(this.domesticTax() + this.price));
                return taxRounder(this.domesticTax());
        }
    }
}

module.exports = Item;
