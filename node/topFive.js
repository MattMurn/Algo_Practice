const jsonObj = require('./test_data');


userIdUsage = intakeArray => {

    const users = {};
    const usersArray = [];
    const unique = [];
    
    intakeArray.map( check => {
        if(unique.indexOf(check.user_id) < 0){
            unique.push(check.user_id);
            users[check.user_id] = 0;
        }else {
            users[check.user_id] ++;
        }
    })

    for(transfer in users){
        usersArray.push([transfer, users[transfer]]);
    }
    usersArray.sort( (a, b) => {return b[1] - a[1]});
    let topFive = usersArray.slice(0,5);
    return topFive;
}
userIdUsage(jsonObj);