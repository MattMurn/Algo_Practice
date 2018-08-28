
module.exports = aveng = arry => {
    let income = 0;
    arry.forEach( element => {
        if(income >=element -25) {
            income += element -(element - 25);
        }
        else {
         return"No";
        }
    })
    return "Yes";
}

// aveng(total);