let borReach = require('./yoder.js')
const tester = "()(())()";
borReach.bummed();
function validParens(parens){
    // if you get count of current ) and ( you can evalue if true or not.
    let openCount = 0;
    let closedCount = 0;
    const final = parens.split("").forEach(element => {
        if(closedCount > openCount){
            //  console.log("false");
             return false;
        }else if (element === "("){
            openCount ++;
        }else if( element === ")"){
            closedCount ++;
        }
    })

    if (parens.length === (openCount + closedCount)){
        // console.log("true");
        return true
    }


    // if (final.length === (openCount + closedCount)){
    //     console.log("true");
    // }
    // (openCount === closedCount) ? console.log("true"): console.log("false")

    
    // parens.reduce( position )
    
    // console.log(getParensLength(parens,")"));
    // console.log(numberOfParens);
    // console.log(`open: ${openCount} closed: ${closedCount}`)

  }

//   getParensLength = (parens, checker) => {
//     return parens.split("").filter( position => position == checker).length
//   }

validParens(tester);

let first = "this is first";
let second = "this is second";
getMeThisData = (x, callback) => {
    
    callback();

    console.log(x);
}

getMeThisData(first, ()=> {
    console.log(second);
});

  module.exports = validParens