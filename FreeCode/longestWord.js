function findLongestWordLength(str) {
    let wordArr = str.split(' ').sort((a,b)=> b.length - a.length);
    return wordArr[0];
  }
  

  const recurse = num => {
      if(num === 0){
          return 1;
      }
      else if(num <= 1){
          return num;
      }
      return num - recurse(num-1);
  }

  console.log(recurse(22))
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));