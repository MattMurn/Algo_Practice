const single = arr => {
    let final = [];
    arr.map((el, i) => {
        (final.indexOf(el) === -1) ? final.push(el) : null;
    });
    return final;
};
let test = [1,2,3,4,4,3,2,1,5,5,6,6,7,7];
console.log(single(test));