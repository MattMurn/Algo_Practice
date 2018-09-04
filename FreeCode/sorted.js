function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num)
    arr.sort((a,b) => a - b);

    return arr.indexOf(num);
  }

  console.log(getIndexToIns([40, 60], 50));