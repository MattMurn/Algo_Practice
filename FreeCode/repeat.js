function repeatStringNumTimes(str, num) {
    // repeat after me
    let final = [];
    // let i = 0;
    // while(i <= num){
    //     console.log(i)
    //     final += str;
    //     i++;
    // }
    for(let i = 0; i < num; i++){
        final.push(str);
    }
    return final.join('');
  }
  
  console.log(repeatStringNumTimes("abc", 3));