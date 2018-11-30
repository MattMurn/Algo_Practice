/*

    Prototype pattern - objects we create act as prototypes
    for other objects to be created in the future.
    Differential Inheritance - objects are able to directly inherit 
    from other objects

*/
// Differential Inheritance -
let spitName = {
    spitName: function() {
        return this.name.split('').forEach(el => el.toUpperCase());
    }
}

let tester = Object.create({
    name: 'matt',
    age: 33,
    getInfo: function() {
        return console.log(`hello, ${this.name}, are you ${this.age} years old`)
    }
});

// matt = tester;
tester.getInfo();