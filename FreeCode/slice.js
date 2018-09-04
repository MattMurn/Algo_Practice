function frankenSplice(arr1, arr2, n) {
    let slicer = arr2.slice(0, arr2.length)
    slicer.splice(n, 0, ...arr1);
    return slicer;
  }
  
  console.log(frankenSplice([1, 2, "h"], [4, 5], 1));