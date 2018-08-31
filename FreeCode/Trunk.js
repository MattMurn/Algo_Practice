function truncateString(str, num) {
    console.log(str.length)
    if(num >= str.length){
        return str;
      }
       return str.substr(0,num) + "...";
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));