const jsonObj = require('./test_data');


howLong = (takeInArray, takeInStatus) => {
    // get all instances of status and subtract end_time from start_time.
    // add that time to an array and reduce that to 1 number / array.length.
    const statusArray = [];
    takeInArray.map( element => {
        
        if(element.status === takeInStatus && element.end_time !== null){
            
            let time = element.end_time - element.start_time;
            // statusArray.push([ element.id ,time]); used this to find null end_time
            statusArray.push(time);
        }
    })

    let final = statusArray.reduce( (cur, next) => cur + next, 0) / statusArray.length;

    console.log(final)
    return final;
}

howLong(jsonObj, 8951);