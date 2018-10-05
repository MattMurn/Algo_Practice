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
// console.log(basketMod.getQuant())
basketMod.addItem({
    item: 'cheese',
    price: 2.99
})
basketMod.addItem({
    item: 'bread', 
    price: 1.99
})
// console.log(basketMod.getQuant())
basketMod.clear();
// console.log(basketMod.getQuant())
// console.log(basketMod.getTotal())



let revealingModule = (()=> {
    let priVar = 'Ben Hogan'
    let pubVar = 'Hello World'

    privFunction = () => {
        console.log(`Name: ${priVar}`)
    }
    pubSetName = str => {
        priVar = str;
    }
    pubGetName = () => {
        privFunction();
    }

    return {
        setName: pubSetName,
        greeting: pubVar,
        getName: pubGetName
    }
})();


revealingModule.setName('Jerome');

revealingModule.getName();

console.log(revealingModule.greeting);


firstSingle = (()=> {
    let instance;
    init = () => {
        privMethod = () => {
            console.log('I am private');
        } 
        let privVar = 'also a private variable';
        let priRandomNumber = Math.floor(10);

        return {
            pubMethod: () => {
                console.log('this is a public method')
            },
            pubProp: 'also public',
            getRandom: () => {
                return priRandomNumber;
            }
        }
    };
    return {
        getInstance: () => {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})