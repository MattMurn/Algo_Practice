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

// export default Bonds;

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
    use active voice when you are writing these use 
    cases.

User Stories - short scenario structured on index cards
    follows format:
        As a (actor)
        I want (action)
        So (reason / possible execution path)

Domain Modeling - 
    start to map use cases. Identify class relationships and apply verbs 
    as respobsibilities.
        
UML modeling to make Class Diagram.
constructorr method is similar in all oop
overloaded constructors - take in multiple parameters
static or shared methods => a method that is used by 
all instances of the class 
    
abstract class, when you are only using class to be 
inherited 
INTERFACES - created like a class w/o properties, just 
method signatures - no functionality. can be used
by multiple class instances. alieviates inheriting 
every property & method from super class. Implementation
> Inheritance.

aggregation - has a relationship. 
composition - has a relationship. Implies ownership

sequence diagrams. 
Principles of OOP
S: Single responsibility
O: Open/ Closed Priniple
L: Liskov Substitution Principle - can be replaced by subclasses. 
I: Interface Segregation Principle - many specific interfaces for different purposes(as )
D: Dependency Inversion Principle

Gneral Responsibilty Assignment Software Patterns
9 ideas:
creator 
controller
pure fabrication 
indirection - reduce coupling
information expert
low coupling high cohesion
polymorphism 

*/

    class bankAccount {
        constructor(name, acct) {
            this.name = name;
            this.acct = acct;
        }
        printBankInfo() {
            return `
            Account Holder: ${this.name}
            Account Number: ${this.acct}
            `
        }
    }

    class Checking extends bankAccount {
        constructor(name, acct, isChecking){
            super(name, acct);
            this.isChecking = isChecking;
        }
        checker() {
           return (this.isChecking) ? this.printBankInfo() : 
            `${this.name} does not have a checking acocuntssss`
        }
    }


    let home = new Checking('Matt Murnighan', 4328902, false);

    console.log(home.checker());
    class Singleton {

        constructor(){
            if(!Singleton.instance){
                Singleton.instance = new logger();
            }
        }
    
    }

    class logger {
        constructor() {
            this.logs = [];
        }
        get count() {
            return this.logs.length;
        }
        log = (x) => {
            const stamp = new Date().toDateString();
            this.logs.push(x)
            console.log(this.logs);
        }
    }