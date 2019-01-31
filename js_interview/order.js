
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

const order = word => {
    if(word === ''){
        return '';
    }
    let holder = [];
    let number = /[0-9]/;
    let splitter = word.split('');
    splitter.forEach((el, i)=> {
        let mindex = 0; 
        let num = parseInt(el);
        // console.log(typeof(parseInt(el)));
       if(num >= 0){
           splitter[i] = 'TEST'
           if(el < mindex){
               splitter[i] = "el";
           }
           mindex = el;
           console.log(el)
        //    holder.push(el);
        //    if(mindex === 0 || el < mindex){
        //        console.log('hitter');
        //     splitter[mindex] = 'el';
        //     mindex = i;
        //    }
       }
   });

   console.log(splitter)
   return holder.sort((a,b)=> a-b);

}

// console.log(order('is2 Thi1s T4est 3a'));

const a = [1, 2, 3, 4, 5];

Array.prototype.multipy = function() {
    let final = [...this, ]
    this.forEach(el => {
        final.push(el*el);
    })
    return final;
}
console.log(a.multipy());

const singleton = (name, type) => {
    let obj;
    if(obj){
        return obj;
    }
    obj = {
        name: name,
        type: type
    }
}

console.log(singleton('test', 'case'));
console.log(singleton('second', 'cases'));


const mySingleton =(()=> {
    let instance;
    init = () => {
        let this_is_private = 'tester';
        let second_private = 'case';
        private_method = () => {
            return this_is_private;
        }
        return {
            public_method: () => {
                console.log('greetings from the public method');
            },
            show_private: () => {
                return private_method();
            }
        }
    }
    return {
        getInstance: () => {
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }
})();



let iffe_test = 1000;
console.log(iffe_test);


(() => {
    let iffe_test = 3000;
    console.log(iffe_test);
})()