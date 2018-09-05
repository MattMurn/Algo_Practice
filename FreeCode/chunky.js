function chunkArrayInGroups(arr, size) {
    // Break it up.

    let final = [];
    if(arr.length < 2){
        final.push(arr);
        return final;
    }
    final.push(arr.splice(0, size));
    // console.log(first)
    console.log(final)
    // console.log(arr)
    // let second = arr.splice(size, arr.length)
    // final.push(first)
    // console.log(second);
    // final.push(...arr)

    return chunkArrayInGroups(arr,size);
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));

  console.log(chunkArrayInGroups([0,1,2,3,4,5],4));