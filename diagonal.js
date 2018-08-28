
function diagonalSum(matrix){
    //...
    let final = 0;
    matrix.map((sub, i)=> final += sub[i]);
    return final;

}

var exampleArray = [[5, 0, 0, 0],
                   [0, 5, 0, 0],
                   [0, 0, 5, 0],
                   [0, 0, 0, 5]]

diagonalSum(exampleArray);
