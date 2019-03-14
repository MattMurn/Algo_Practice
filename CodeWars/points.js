function points(games) {
    return games.reduce((total, curr) => {
        let split = curr.split(':');
        if(split[0] > split[1]){
            return total += 3;
        }
        else if(split[0] === split[1]) {
            return total += 1;
        }
    },0)    
  }

console.log(points(["1:0","2:0","3:0","4:4","2:1","3:111","4:1","3:2","4:2","4:3"]))