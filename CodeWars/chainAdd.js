    add = x => {
        let total = 0;
        let f = y => {
            // console.log(add(x+y))
            total += y;
            return f;
        }
        f = () => {
            // console.log(x)
            return total;
        }
        
        return f;
    }
    module.exports = add;

    console.log(add(3)(3)(4));
// sumT(10)
// .then( result => { console.log('after 3 seconds', result)});

// async function sumT(value) {
//     const reaminser = afterT(20);
//     return value + await reaminser;

// }

// async function afterT(value) {
//     return new Promise( result => {
//         setTimeout(()=> {
//             result(value)
//         }, 3000)
//     })
// }


