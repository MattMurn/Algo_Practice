century = year => {
    // year = year.toString().split('');
    // let lastTwo = year.length-2;
    // if( year[lastTwo] == 0 && year[lastTwo+1]  == 0 ){
    //     return parseInt(year.splice(0, lastTwo).join(''))
    // }else if(year.join('') <= 100 ){
    //     return 1
    // }else {
    //     return parseInt(year.splice(0, lastTwo).join(''))+1;
    // }
    return (year % 100 === 0) ? parseInt(year/100) : parseInt(year/ 100) + 1;
}
century(1988)

module.exports = century;