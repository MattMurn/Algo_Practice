let { rounder } = require('./helperFunction.js')

const Cart = function(items) {
    this.total = 0;
    this.items = items;
    // method that takes non tax adjusted item prices & quantity 
    this.calcSubTotal = function (){
        // console.log(this.items)
        let sub =  this.items.reduce((curr, next,i)=> {
            return curr + rounder(next.itemSubTotal());
        }, 0)
        return sub;
    };
    // method that takes int item, applies tax and returns total
    this.calcTax = function(){
        return this.items.reduce((curr, next, i)=> {
            return curr + parseFloat(next.totalTax());
        },0)
    }   
    // method that prints out the cart items, sub total, tax & and adjusted total.
    this.printCart = function(){
       this.items.map((element,i)=> {
           console.log(`${element.quantity} ${element.name} : ${element.price}`)
       })
       console.log(`Sales Tax: ${this.calcTax()}`)
       console.log(`Total: ${rounder(this.calcTax() + this.calcSubTotal())}`)

    }
}

module.exports = Cart;