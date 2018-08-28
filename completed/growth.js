function nbYear(p0, percent, aug, p) {
    // your code
    let numYear = 0
    let currentYear = 0
    
    while (currentYear < p){
        // console.log((percent/100)* p0);
        currentYear = p0 + ((percent/100) * p0 + aug);
        p0 = currentYear;
        // console.log(currentYear)
        numYear ++;
    }
    // // console.log(currentYear);
    console.log(numYear);


return numYear;

}


 nbYear(10, 10, 100, 2000);

nbYear(1500, 5, 100, 5000);
