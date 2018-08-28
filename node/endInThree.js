//Given that a status ending in 3 represents an error status, 
// what percentage of pieces in this data set end up in an error status at least twice?
const jsonObj = require('./test_data');

errorLeastTwice = intakeArray => {
   
    const twicePlus = [];
    const totalErrors = [];
    
    const check = intakeArray.map( element => {
        //make status iterable
        let statusArray = element.status.toString().split('');
        if(statusArray[statusArray.length-1] === "3"){
            if(twicePlus.indexOf(element.piece_id) < 0){
                let id = {
                    piece_id: element.piece_id,
                    status: element.status,
                    status_count: 1
                }
                twicePlus.push(id);
            }else {
                twicePlus[element].status_count ++;
                }
        }    
    })

    const errorTwoPlus = twicePlus.map( element => {
        if(element.status_count >= 2){
            totalErrors.push(element.status_count);
        }
    })

    if(totalErrors.length > 0){
        const reducer = totalErrors.reduce((cur, next)=>{
            return cur + next;
        })
        return reducer / intakeArray.length;

    } else{
        return 0;
    }
}
errorLeastTwice(jsonObj);