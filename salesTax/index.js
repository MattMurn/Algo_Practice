let Item = require('./item.js');
let Cart = require('./cart.js');
let Tax = require('./tax.js');
let round = require('./helperFunction.js')
// taxes 
let domestic_tax = new Tax('domestic', .1);
let import_tax = new Tax('import', .15)
// output 1 items
let test_item = new Item('diet coke', 3, 2.49, domestic_tax);
let book = new Item('book', 1, 12.49, domestic_tax, 'book');
let cd = new Item('cd', 1, 14.99, domestic_tax, 'electronic');
let chocolate = new Item('chocolate', 1, .85, domestic_tax, 'food');
// output 1 cart
let cart_one = new Cart([book, cd, chocolate, test_item]);
cart_one.printCart();

let import_chocolate = new Item('imported box of chocolate', 1, 10.50, import_tax, 'food');
let import_perfume = new Item('imported bottel of perfume', 1, 54.65, import_tax, 'personal care');
let cart_two = new Cart([import_chocolate, import_perfume])
cart_two.printCart();
// console.log(cart_one.subTotal);
// cart_one.calcSubTotal();
// console.log(cart_one.subTotal);
// console.log(round(cart_one.calcSubTotal()));
// console.log(cd.itemTax())
// console.log(book.itemTax())
// console.log(chocolate.itemTax())
// console.log(cart_one.calcTax());
// console.log(test_item.itemTotal());
// console.log(parseFloat(book.itemTax()) + parseFloat(cd.itemTax()) + parseFloat(chocolate.itemTax()));