this.color = 'red';
var myCar = {
    color: "Blue",
    logColer: function() {
        var self = this;
        console.log(' in logColor - this.color: ' + this.color);
        console.log(' in logColor - self.color: ' + self.color);
        (function(){
            //this inside of nested functions reference the global scope.
            console.log('in iife - this.color: ' + this.color);
            console.log('in iife - self.color: ' + self.color);
        })();
    }
}

myCar.logColer();