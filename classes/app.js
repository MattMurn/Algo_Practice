
console.log("this is coming from app.js")

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color
    }

    write () {
        console.log(this)
        console.log(` Your car has  ${this.doors} doors, a ${this.engine} enginer and is ${this.color}`)
    }
}

class Suv extends Car {
    constructor(doors, engine, color, brand){
        super(doors, engine, color);
        this.brand = brand;
    };
    myBrand() {
        console.log(this)
        console.log(` this car is a ${this.brand}`);
    }
}

class Truck extends Suv {
    constructor(doors="2", engine="v8", color="yellow", brand="dodge", isHemi=false){
        super(doors, engine, color, brand);
        this.isHemi = isHemi;
    }
    isHemi_method(){
        console.log(this);
        (this.isHemi) ? console.log(`This ${this.brand} truck has a Hemi`)
        : console.log(`This ${this.brand} truck does not have a Hemi`)
    }
}

const camry = new Car(4, 'v6', 'Black');
const land_rover = new Suv(4, 'v8', 'grey', 'Range Rover');
const F150 = new Truck(6, 'v6', 'red', 'Ford',  true);
const _16_wheeler = new Truck(16, 'v12', 'white', 'Hill');

Truck.prototype = () => {
    console.log(this.color)
}

camry.write();

land_rover.myBrand();

F150.isHemi_method();2

F150.write();

_16_wheeler.write();


multiply = x => {
    return y => {
        return z => {
            console.log( x * y * z);
        };
    };
};

multiply(4)(4)(4)