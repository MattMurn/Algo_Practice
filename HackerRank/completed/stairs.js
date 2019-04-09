function staircase(n) {
    for (let i = n-1; i >= 0; i--){
        let level = new Array(n).fill(" ");
        for (let j = i; j < n; j++){
            level[j] = "#";
        }
         console.log(level.join(""));
    }

}

console.log(staircase(6));