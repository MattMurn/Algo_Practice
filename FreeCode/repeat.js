function repeatStringNumTimes(str, num) {
    // repeat after me
    let final = [];
    for(let i = 0; i < num; i++){
        final.push(str);
    }
    return final.join('');
  }
  
  console.log(repeatStringNumTimes("abc", 3));