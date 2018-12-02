/*
call method on function object can change the 'this' 
context. can chain it onto method to add this to object 
... takes in object mehtod's arguments individually.
apply method on function object can change the 'this' 
context.... takes in array argument

*/

const car1 = {
    brand: 'Porsche',
    getCarDescription: function(price, year, color){
        console.log(`this car is a ${this.brand}. The 
        price is ${price}, the year is ${year}, the color is
        ${color}`);
    }
}

const car2 = {
    brand: 'Ford'
}

car1.getCarDescription.call(car2, 8999, 1989, 'red');

car1.getCarDescription(30000, 2008, 'black');

const car3 = {
    brand: 'Lambo'
};

car1.getCarDescription.apply(car3, [30000, 2015, 'green']);
