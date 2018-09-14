function confirmEnding(str, target) {
    return str.substring(str.length- target.length) === target ? true : false;
  }
  
  console.log(confirmEnding("Bastian", "adn"));


  