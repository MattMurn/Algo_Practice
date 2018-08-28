/*
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

Keep the punctuation, and remove the spaces.
Use Xray without dash or space.
Reference

alt text

You can use the NATO hash with the alphabet

psuedo = 
get nato alpha and either: put into an array or object with 
letter: nato_alpha key value pair. 
split input into array. (toUpperCase) 
filter through input with conditional set to nato_alpha if using array, or
use conditional if input[i] === key, input[i] = value;


*/
const alpha = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
  }

to_nato = words => {
    // Go code
    let newArray = words.toUpperCase().split('');
    for (let i = 0; i < newArray.length; i++) {
        for(let letter in alpha){
             if(newArray[i] === letter){
                newArray[i] = alpha[letter];
            }else if( newArray[i] == " "){
                newArray.splice(i, 1);
            }
        }        
    }
    return newArray.join(' ');
};

to_nato("If you can read!");
module.exports = to_nato;

