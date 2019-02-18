let Item = require('./item.js');
let Cart = require('./cart.js');
let Tax = require('./tax.js');
let round = require('./helperFunction.js')
// taxes 
let domestic_tax = new Tax('domestic', .1);
let import_tax = new Tax('import', .05)
// output 1 items
let test_item = new Item('diet coke', 3, 2.49, domestic_tax);
let book = new Item('book', 1, 12.49, domestic_tax, 'book');
let cd = new Item('cd', 1, 14.99, domestic_tax, 'electronic');
let chocolate = new Item('chocolate', 1, .85, domestic_tax, 'food');
// output 1 cart
let cart_one = new Cart([book, cd, chocolate]);
cart_one.printCart();
// output 2 items
let import_chocolate = new Item('imported box of chocolate', 1, 10.00, import_tax, 'food');
let import_perfume = new Item('imported bottel of perfume', 1, 47.50, import_tax, 'personal care');
//output 2 cart
let cart_two = new Cart([import_chocolate, import_perfume])
cart_two.printCart();
//output 3 items
let perfume_2 = new Item('imported bottle of perfume', 1, 27.99, import_tax, 'personal care');
let perfume_3 = new Item('bottle of perfume', 1, 18.99, domestic_tax, 'personal care');
let pills = new Item('packet of headache pills', 1, 9.75, domestic_tax, 'medical')
let chocolate_2 = new Item('box of imported chocolate', 1, 11.25, import_tax, 'food');
// output 3 cart
let cart_three = new Cart([perfume_2, perfume_3, pills, chocolate_2]);
cart_three.printCart();
