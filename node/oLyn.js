 class person  {
     constructor(name, type, dob){
        this.name = name;
        this.dob = dob;
        this.type = type;
     }

    printName() {
        console.log(this.name, this.type, this.dob);
    }
}
class customer extends person {
    constructor(name, type,customerId){
        //looks up the class hierarchy for props
        super(name, type)
        this.customerId = customerId
    }
    printInfo() {
        console.log(`name: ${this.name} type: ${this.type}
        customerId: ${this.customerId}
        `)
    }
}
let matt = new person('Matt', 'person', 'december 12, 1980');

matt.printName();

let jery = new customer('Matt', 'person', 33234443)

jery.printInfo();