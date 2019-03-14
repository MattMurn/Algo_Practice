/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters
 after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string
  and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, 
  they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
  like in the original Rot13 "implementation". Please note that using "encode" in Python is considered cheating.
*/
// need to figure out how to account for 
// const rot13 = str => {
//   //define alphabet, regex check, alphabet array.
//   let alpha = 'abcdefghijklmnopqrstuvwxyz';
//   let alpha_check = /[a-zA-Z]/;
//   let cap_check = /[A-Z]/;
//   let alpha_array = alpha.split('');
//   let new_word = [];
//   let isCap = cap_check.test(str[0])

//   for(let i = 0; i < str.length; i++){
//   // get index in alpha_array to adjust by 13.
//     let curr_index = alpha_array.indexOf(str[i]);
//     // if index is a capital letter
//     if(curr_index === -1 && alpha_check.test(str[i])){
//       curr_index = alpha_array.indexOf(str[i].toLowerCase())
//     }
//     // if char is not in alphabet, push to new_word
//     if(!alpha_check.test(str[i])){
//       new_word.push(str[i]);
//     } // index is greater than 12, sub 13 from curr_index to get new index && push
//     else if(curr_index > 12){
//       curr_index = curr_index - 13;
//       new_word.push(alpha_array[curr_index]);
//     } // increment index by 13 && push
//     else {
//       curr_index = curr_index + 13;
//       new_word.push(alpha_array[curr_index]);
//     }
//   }  
//   if(isCap){
//     new_word[0] = new_word[0].toUpperCase();
//   }
//   return new_word.join('');
// }
const rot13 = str => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  str
}
console.log(rot13('1234#*($'))
console.log(rot13('Test'));
