(function(){
    let carManager = {
        requestInfo: function(model, id){
            return `the info for ${this.model} with ID ${this.id} is foobar`
        },
        buyVehicle: function(model, id){
            return `you have successfully purchased Item ${this.id} a ${this.model}`
        },
        arrangeViewing: function(model, id){
            `You have successfully booked a view of ${this.model} (${this.id})`
        }
    }
})();

carManager.execute = function(name){
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
}

carManager.execute('buyVehicle', 'Ford Escort', '3382394');


