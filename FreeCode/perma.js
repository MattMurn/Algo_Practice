
// function uniq_fast(...params) {
//     let a = [].concat(...params)
//     var seen = {};
//     var out = [];
//     var len = a.length;
//     var j = 0;
//     for(var i = 0; i < len; i++) {
//          var item = a[i];
//          if(seen[item] !== 1) {
//                seen[item] = 1;
//                out[j++] = item;
//          }
//     }
//     evaluate(out, a)
//     //  console.log(out);
// }


const define = (...params) => {
    let counts = {}
    let final = []
    let test = [].concat(...params).sort()
    for(let i = 0; i <= test.length-1; i++){
        if(!counts[test[i]]){
            counts[test[i]]= 1;
        }else {
            counts[test[i]] ++;
        }
    }
    for(let count in counts){
        if(counts[count] === 1){
            final.push(count)
        }
    }
    return console.log(final);
}
define([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
let difference = []
const evaluate = (a, b) => {
    //loop through first array and compare each element with second.
    // console.log( Math.max(a.length,b.length))
    // if(b === undefined){
    //     return;
    // }
    for(let j = 0; j <= a.length-1; j++){
        let findIndex = b.indexOf(a[j]);
        // console.log(b);
        if(b.indexOf(a[j]) >= 0){
            // console.log(b.indexOf(a[j]))
            b.splice(findIndex, 1)
        } else {
            b.push(a[j])
            difference.push(a[j])
        }
    }
        console.log(difference)
}

// define([1,2,3,5,6,7], [1,98,322,3], [1,3,98,33, 2, 5, 7, 897], [])
// evaluate([1,2,3,5],[1] )

// take in arguments and loop through each
//
// define([1,2,3,5,6,7], [1,98,3], [1,3,98,33, 2, 5, 7], [])

// function TestMe()
// {
//     console.log(arguments);
//     console.log(arguments.length)
//    for (var a in arguments)
//    {
//      console.log(arguments);
//      console.log('-------------')
//    }
// }

// TestMe(1);
// TestMe(1,2,3);
// TestMe(1,2,3,4,5,6);
// TestMe.apply([1,2,3,4,44], [1,2,3,4,5]); 

// write a recursive function that reverses a string => 

const recurse = word => {
    // let count = word.split('').length;
    // console.log(count);
    if(word.length <=1) {
        return word;
    }
    return   console.log(recurse(word.substring(1))+ word[0]);
}

// recurse("stop")