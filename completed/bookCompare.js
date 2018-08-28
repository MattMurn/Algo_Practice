    stockList = (listOfArt, listOfCat) => {
    //1 get object to hold values 
        let finalObj = {};
    // declare counter for final statement eval.
        let count = 0;
        let lessDash = 0;
    //fn that takes category element, if its = to the first element
    // in article array, add value to total.
        compare = (finalObj, article, listOfCat) => {
            listOfCat.forEach(categoryEl => {
                if(article[0] === categoryEl && article.split(' ')[1] > 0){
                    finalObj[categoryEl] += parseInt(article.split(' ')[1]);
                } 
            })
        }
        // generate key value pairs for final object.
        listOfCat.forEach(objProp => finalObj[objProp] = 0);
        // iterate over list of articles wi th compare fn.
        listOfArt.forEach(article => {
            compare(finalObj, article, listOfCat);
        })
        //creating specific string output.
        let statement = []; 
        for(let prop in finalObj){
            lessDash ++;
            statement.push(`(${prop} : ${finalObj[prop]})`, '-');
            if(finalObj[prop] === 0){
                count ++;
            }
        }
        // take out last "-"
        statement.splice(statement.length -1, 1);
        // check all articles have 0 value. if all have 0 value, 
        // return '';
        if(count === (statement.length-(lessDash-1))){
            statement = ''
            return statement;
        }else {
            return statement.join(' ');
        }
    }
    b = ["ABAR 0", "CDXE 0", "BKWR 0", "BTSQ 0", "DRTY 0"]
    c = ["R", "X", "S", "K"]
stockList(b, c) 

module.exports = stockList;