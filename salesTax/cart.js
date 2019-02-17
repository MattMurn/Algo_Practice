let round = require('./helperFunction.js')

const Cart = function(items) {
    this.total = 0;
    this.items = items;

    this.calcSubTotal = function (){
        // console.log(this.items)
        let sub =  this.items.reduce((curr, next,i)=> {
            return curr + round(next.itemSubTotal());
        }, 0)
        return sub;
        /*
        method that takes non tax adjusted item prices & quantity

        */
    };
    this.calcTax = function(){
        return this.items.reduce((curr, next, i)=> {
            return curr + parseFloat(next.itemTax());
        },0)
        /*
        method that takes int item, applies tax and returns total
        */
    }   
    this.printCart = function(){
        /*
        method that prints out the cart items, sub total, tax & and adjusted total.
        */
       this.items.map((element,i)=> {
           console.log(`${element.quantity} ${element.name} : ${element.price}`)
       })
       console.log(`Sales Tax: ${this.calcTax()}`)
       console.log(`Total: ${round(this.calcTax() + this.calcSubTotal())}`)

    }
}

module.exports = Cart;