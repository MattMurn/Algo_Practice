let singleton = (function(){
    let instance;
    function init(){
        let privateVar = "This is private variable that can be accessed from this object";
        return {
            publicMethod: function() {
                return privateVar;
            }
        }
    }
    return {
        getInstance:  function() {
            if(!instance){
                return init();
            }
            return instance;
        }
    }
})();
let single = singleton;
// console.log(single.publicMethod());

// console.table(['stabel', 'hello'])
// console.log(single);
// console.log(single.getInstance().privateVar);
// console.log(user.name);

class Tester {
    constructor(value1=1, value2=2, value3=3) {
        this.value1 = value1,
        this.value2 = value2,
        this.value3 = value3
        this.random = Math.floor(10);
    }

    print() {

        let privateVariable = `Hello from the print function, ${this.random}`
        let defString = `value 1 = ${this.value1}, value 2 = ${this.value2},  value 3 = ${this.value3}, random = ${this.random} `;
        return this.random % 2 === 0 ? privateVariable : defString;
    }
}

let alex = new Tester('this', 'is', 'a Tester');

console.log(alex.print());

const iifeLife = (function(){
    let first_private_var = 'this is the first private variables';
    print = () => {
        console.log(first_private_var);
        return first_private_var;
    }
    print()
});
iifeLife();
// console.log(iifeLife);