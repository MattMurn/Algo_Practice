// warrior = 'ninja'
'use strict'
const warrior = {
    name: 'herry',
    agility: 90,
    weapon: 'sword',
    type: 'Samurai'
}
const screamWarrior = () => {
    let warrior_2 = 'Samurai';
    warrior_3 = 'Viking';
    return {
        shootWarrior: () => {
            return console.log(warrior, warrior_2)
        }
    }
}
// const newWarrior = screamWarrior();

// newWarrior.shootWarrior();
// screamWarrior();
// console.log(warrior_3)

// console.log(warrior, warrior_2)

function chance(name, inst) {
    this.name = name;
    this.inst = inst;
    this.printChance = function() {
        console.log(`this is a constructor and its properities -- name: ${this.name}, inst: ${this.inst}`);
    }
}

let jerry = new chance('jerry', 'Northwestern');

// jerry.printChance();

class Change {
    constructor(name="Barry", inst="San Fransisco") {
        this.name = name;
        this.inst = inst;
        this.price = 899
    }
    
    printChance() {
        console.log(`this is a constructor and its properities -- name: ${this.name}, inst: ${this.inst}`);
    }
    cancelDaSeason() {
        console.log(`the cost of this season to get through to the playoff is ${this.price} on average`)
    }
}

class Bonds extends Change {
    constructor(name, inst, ba){
        super(name, inst);
        this.ba =ba;
    }
    
    printBa() {
        console.log(`${this.name}'s batting average is ${this.ba}`)
    }
}
let barry = new Change('Barry', 'Illinois');

barry.printChance();
barry.cancelDaSeason();

let gary = new Bonds('Barry', 'San Fransisco', .321)

gary.printBa()

gary.Prototype.edge = () => {
    console.log(this.name);
}
gary.edge();
/* 
steps in getting an app up and running in an OOP style.
Creating Requirements:
    Functional - features & capabilites
    Non-Functional - help legal performance
    F unctional requirements 
    U sability  
    R eliability
    P erformance
    S upportability
    + Design restraints
        implementation 
        interface
        physical
    UML - diagramming language 
    Use Cases - short phrase active verb
        title
        actor - could be user, admin, etc
        scenario plain english steps that actor follows.

*/