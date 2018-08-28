// const jsonObj = require('./test_data');


// userIdUsage = intakeArray => {

//     let users = {};
//     let usersArray = [];
//     let unique = [];
    
//     intakeArray.map( check => {
//         if(unique.indexOf(check.user_id) < 0){
//             unique.push(check.user_id);
//             users[check.user_id] = 0;
//         }else {
//             users[check.user_id] ++;
//         }
//     })

//     for(transfer in users){
//         usersArray.push([transfer, users[transfer]]);
//     }
//     usersArray.sort( (a, b) => {return b[1] - a[1]});
    
//     let topFive = usersArray.slice(0,5); 
//     console.log(topFive);
    

//     return topFive;
// }
// userIdUsage(jsonObj);

ext = () => {
    let a = -1;
    let b =0;
    let c = -1;

    for (let b = 0; a < 12; b++) {
        console.log(b)
        a = (a + a) * c;
        console.log(`this is A: ${a}`);

        
    }

  console.log(a, b)
}

ext();


// const normalise = input_time => {
//     const str_time = format_time(input_time).split('');

//     if (str_time.slice(1,4) != "Sun"){
//         input_time -= 24*60*60;
//         str_time = format_time(input_time)

//     }
//     if (str_time.slice(1,4) != "00"){
//         input_time -= 60*60;
//         str_time = format_time(input_time)

//     }
//     if (str_time.slice(1,4) != "00"){
//         input_time -= 60;
//         str_time = format_time(input_time)

//     }
//     if (str_time.slice(1,4) != "00"){
//         input_time -= 1;
//         str_time = format_time(input_time)

//     }
//     return str_time;
// }