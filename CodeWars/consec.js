/*
You are given an array strarr of strings and an integer k. 
Your task is to return the first longest string consisting of
 k consecutive strings taken in the array.

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

*/

function longestConsec(strarr, k) {
    // your code
    let arrLength = strarr.length;
    if(!arrLength || k > arrLength || k <= 0){
        return "";
    }
    let currIndex = 0;
    let endIndex = arrLength - k;
    let longestStr = "";
    while(currIndex < arrLength - k +1){
        let currLength = []
        for(let i = currIndex; i < currIndex + k; i ++){
            currLength.push(strarr[i]);
        }
        if(currLength.join(",").length > longestStr.length){
            longestStr = currLength.join("");
        }
        console.log(currLength);
        // console.log(strarr[currIndex], strarr[currIndex +1])
        currIndex ++;
    }
    console.log(longestStr);
    return longestStr
}
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);
longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2);