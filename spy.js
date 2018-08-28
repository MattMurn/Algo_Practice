function spyOn (func) {
        // not a function unless you return something son!!!!
        //make a factory function, return methods for spying....TRY
    //  return   (func,console.log(arguments[0], arguments[1]))
    

    return {
        func,
        callCount: function () {
            // if(/*function runs*/x ){
               this.calls ++;
               let calls = 3
               return console.log('hello from closure land');
               
            // }
        },
        returned: () => console.log(func.params),
        
    };
  }
adder = (a, b) =>( a + b);

//   spyOn.callCount();
let check = spyOn(adder);
// check.callCount();
// check.callCount();
// check.callCount();
// check.callCount();
// check(3,4);
// check.callCount();
// check.returned();
// console.log(check.callCount())
// check.callCount();
// console.log(check.calls)
//   console.log(check.callCount());


let global = 4;
let warriorArr = [
    {
        name: 'Beowolf',
        attribute: 'sword fighter'
    },
    {
        name: 'Grendal',
        attribute: 'monster'
    },
    {
        name: 'Grendal/s Mother',
        attribute: 'monster'
    }
]
chall(warriorArr);
const chall = () => {

    for(let i = 0; i < warriorArr.length; i++){
        let defaultAns = 'not a warrior'
        console.log(warriorArr[i])
        if(warriorArr[i].attribute === 'monster'){
             console.log(warriorArr[i].name)
        }
        else {
             console.log(defaultAns)
        }
    }
    // console.log(defaultAns)
}

