/*
idea why this function works...
if conditional works a trigger to stop the executing of recurse,
then the call stack unwinds with return statements LIFO - last in first out.
*/
recurse = x => {
    if(x === 0){
        return x;
    }
    else {
        return x + recurse(x -1);
    }
};

console.log(recurse(3));

reverse = string => {
    let final = '';
    let int = string.split('');
    for(let i = int.length-1; i >= 0; i--){
        final += int[i]
    }
    return final;
    // return string.reverse();
}

console.log(reverse('string'));

restring = x => {
    return x.split('').reverse().join('');
}
console.log(restring('restring'));
//use substr & charAt() string methods
stringer = x => {
if(x === ''){
    return '';
}
else {
    return stringer(x.substr(1)) + x.charAt(0);
}
    
}
console.log(stringer('string_recursion'));

function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
};

console.log(reverseString('hello'))


function facts(number){
    if(number === 1){
        return 1;
    }
    return number * facts(number -1 );
}

console.log(facts(5));


let a  = 10;
let b = 20;
a = [ b, b=a ][0];


console.log(a, b);