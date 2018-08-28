function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    return ((nRows - row) * nCols) - ((nRows - row) * (col -1));  
  }

  seatsInTheater(16, 11, 5, 3)