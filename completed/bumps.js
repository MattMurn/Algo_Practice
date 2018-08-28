bump = x => {

    return x.split('n').length>16?"Car Dead":"Woohoo!"
    // let ns = 0;
    
    // x.split('').forEach(el => {
    //     if(el === 'n'){
    //         ns ++;
    //     }
    // })
    // if(ns > 15){
    //     return "Car Dead";
    // }else {
    //     return "Woohoo!"
    // }
};

// bump("_nnnnnnn_n__n______nn__nn_nnn");


module.exports = bump;