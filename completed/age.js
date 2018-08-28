predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) =>{
    return  Math.floor(Math.sqrt([age1,age2,age3,age4,age5,age6,age7,age8]
      .reduce((current, follow)=>current + Math.pow(follow,2),0))/2)
  }

  predictAge(65,60,75,55,60,63,64,45);

  module.exports = predictAge;