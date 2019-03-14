const sequenceSum = (begin, end, step) => {
    let total = 0;
    for(let i = begin; i <= end; i+=step){
        total += i;
    }
    return total;
  };
  
  console.log(sequenceSum(2,6,2));