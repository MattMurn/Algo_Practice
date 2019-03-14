/*
write a function in less than 160 chars that returns a bool if word is a palandrone;
*/

function palCheck(str) {
    return str === str.split('').reverse().join('');
}
