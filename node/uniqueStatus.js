const jsonObj = require('./test_data');


isUnique = intakeArray => {

    const unique = [];
    intakeArray.map( check => {
        if(unique.indexOf(check.status) < 0){
            unique.push(check.status);
        }
    })
    console.log(unique.length)
    return unique.length;
}
isUnique(jsonObj);