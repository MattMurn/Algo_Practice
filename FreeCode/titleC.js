function titleCase(str) {
    let ne = str.split(' ');
    for(let i =0; i< ne.length-1; i++){
        ne[i][0].toUpperCase();
    }
    // return ne.forEach(el => el.length);
    return ne;
  }
  
  console.log(titleCase("I'm a little tea pot"));