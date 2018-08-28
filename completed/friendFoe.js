// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: , Output = ["Ryan", "Yous"]

// Note: keep the original order of the names in the output.
const friendInput = ["Ryan", "Kieran", "Jason", "Yous"];


function friend(friendInput){
   return friendInput.filter(four => four.length === 4);
  }


module.exports =  friend;