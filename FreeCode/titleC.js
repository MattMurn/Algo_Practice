function titleCase(str) {
    //split str into array 
    let ne = str.split(' ');
    //interate.
    for(let i =0; i< ne.length-1; i++){
        ne[i][0].toUpperCase();
    }
    // return array changed. 
    return ne;
  }
  
  console.log(titleCase("I'm a little tea pot"));