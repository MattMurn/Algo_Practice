class Board {
    constructor(cols=4, rows=cols, mines=4 ) {
        this.cols = cols,
        this.rows = rows,
        this.mines = mines,
        this.board = []
        this.boom = "****"
    }
    createMine() {
        for(let i = 0; i < this.mines; i++){
            this.board[this.randomNumberGenerator(this.rows)][this.randomNumberGenerator(this.cols)] = this.boom;
        }
    }
    createRow() {
        let newRow = []
        for(let i = 0; i <= this.cols; i++){
            newRow.push('-');
        }
        return newRow;
    }
    createBoard() {
        for(let i = 0; i <= this.rows-1; i++){
            this.board.push(this.createRow(this.cols));
        }
        this.createMine();
        this.indexValues();
        this.printBoard();
    }
    printBoard() {
        console.log(this.board);
    }
    randomNumberGenerator(max) {
        return Math.floor(Math.random()* max);
    }

     /* ideas for evaulating values:
         function that takes in the row above and below target element. 
         conditionals for each position that connect to target. Use recursion
         on the same target??? 
        question? how do we know what the target is? 
        see indexValues fn.

    */
    checkValues(prevRow, currentRow, nextRow) {
        switch(undefined){
            case prevRow:
                console.log("there is no previous row.")
                break;
            case nextRow:
            // can use this to end turn. 
                console.log("there are no more rows to check.")
        }
        
    }
    indexValues() {
    // takes in an index and returns an updated value
   
      for(let i =0; i <= this.board.length-1; i++){
          for(let n=0; n <= this.cols; n++){
            //   console.log(this.board[i+1])
            //   this.checkValues(this.board[i-1], this.board[i+1]);
              if(this.board[this.cols[n]] === this.boom){
                  console.log("You hit a mine");
              }
            //   (!n-1) ? console.log("no upper array") : '';
            //   let prev = n-1;
            //   let next = n + 1;
            //   let topLeft = (i -1 >= 0) ? this.board[i-1][n-1] : null;
            //   let top = (i -1 >= 0) ? this.board[i-1][n] : null;
            //   let topRight = (i -1 >= 0) ? this.board[i-1][n+1] : null;
            //   (this.board[i][n] === '****') ? null : 
            //   this.board[i][n] = n;
            //   console.log(`previous: ${top}`)
          }
      }  
    }
}

let four = new Board(4);
four.createBoard();
// four.printBoard();


