const num_convert = num =>{

    let num_arr = num.toString().split('');
    let dot = num_arr.indexOf('.');
    let slicer = num_arr.slice(dot+1);

    switch(true){
        case dot === -1:
            return num_arr.join('').toString() + ".00";
        case slicer.length > 4:
            return Math.round(num_arr.join('')*100)/100;
        case slicer.length === 1:
            return num_arr.join('').toString() + '0';
        default:
            return num_arr.join('');
    }
}
console.log(num_convert(5));
console.log(num_convert(50000));
console.log(num_convert(5011.35));
console.log(num_convert(51010111012.34444444));
console.log(num_convert(51010.3));
