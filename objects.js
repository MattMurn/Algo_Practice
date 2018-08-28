class dataFeedChuck {
    constructor()
}


class Bester {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    returnConsole() {
        console.log(`First paramater: ${this.a}
Second Parameter: ${this.b}
    `);
    }
}
function Tester(a, b) {
    this.a = a;
    this.b = b;
    console.log(`First paramater: ${a}
Second Parameter: ${b}
    `);
}

Tester.prototype.add = function() {
    return this.a + this.b;
}


// let Adober = new Tester(5, 6);
let Bro = new Bester(6,7);
Bro.prototype.multipy = function() {
    console.log(this.a * this.b);
}
Bro.returnConsole();
Bro.multipy();

// console.log(Adober.add());
