const printerErrors = str => {
    /*
        variable count;
        create regex a-m;
        convert string to array. 
        conditional with regex check if false count++ else break;
        return count;
    */
    let count = 0;
    let regexCheck = /[a-m]/g;
    str.split("").map(element => {
        console.log(str.length);
        console.log(element);
        if(regexCheck.test(element)){
            return;
        }
        else {
            console.log(`${element} - count ${count}`);
            return count ++;
        }
    })
    return count;
}
console.log(printerErrors("aaax"));
// printerErrorss("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")