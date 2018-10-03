var basketMod = (()=>{
    let basket = [];
    clearBasket = () =>{
        return basket = [];
    }
    quant = () => {
        return basket.length;
    }
    return {
        addItem: values => {
            return basket.push(values);
        },
        getQuant: () => {
            return basket.length;
        },
        clear: clearBasket,
        getQuant: quant,
        getTotal: () => {
            let q = this.getQuant,
            p = 0;
            while(q--){
                p+= basket[q].price;
            }
            return p;
        } 
    }

})();
console.log(basketMod.getQuant())
basketMod.addItem({
    item: 'cheese',
    price: 2.99
})
basketMod.addItem({
    item: 'bread', 
    price: 1.99
})
console.log(basketMod.getQuant())
basketMod.clear();
console.log(basketMod.getQuant())
console.log(basketMod.getTotal())
