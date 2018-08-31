function findElement(arr, func) {
    return arr.filter(el => func(el))[0];
    return filtered;

  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));