// this keyword is self referential when dealing with objects, more specifically prototypes & constructors.
// properties and methods that are being passed around inside an object use the this keyword to define local scope.
// refers to whatever object it is directly inside of.

var house = {
    price: 100000,
    squareFeet: 2000,
    owner: 'Taylor',
    getPrice(){
        return this.price / this.squareFeet;
    }
}

console.log(house.price);
console.log(house.getPrice());