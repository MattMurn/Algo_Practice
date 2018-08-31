function largestOfFour(arr) {
    // You can do this!
    let final = [];
    arr.forEach(element => final.push(Math.max(...element)));
    return final;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));