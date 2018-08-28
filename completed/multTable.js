multiplicationTable = (row, col)=>{
    // Each value on the table should be equal to the value of multiplying the number
    //  in its first row times the number in its first column.
    // nested for loop unavoidable here
    let final = [];
    for(let i = 1; i <= row; i++){
        let rowA = []
        for(let g = 1; g <= col; g++){
            rowA.push(g * i);
        }
        final.push(rowA);
    }
    return final;
  }
  

  module.exports = multiplicationTable;