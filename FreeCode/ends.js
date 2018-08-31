function confirmEnding(str, target) {
    return str.substring(str.length- target.length) === target ? true : false;
    // if(str.substring(str.length - target.length) === target){
    //     return true;
    // }
    // else {
    //     return false;
    // }
  }
  
  console.log(confirmEnding("Bastian", "adn"));