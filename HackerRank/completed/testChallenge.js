/*
replace s or S with 5's

odd length and middle char is a digit replace with double value,

a string of length 1 has no middle

if the length is even, swap the first and last and flip capitalization.

if there is any combo of Nextcapital = reverse chars in Next, case reserve, 
if multiple occurance, do once. 

*/

function strengthenPasswords(passwords) {
    let passArray = passwords.split('');
    let passLength = passwords.split('').length;
    
    isOdd(passLength, replaceFives(passArray));
    

}


nextCapital = word => {
    let arrayCheck = word.toLowerCase();
    let nxt = "nextcapital";
    let nxtSplit = nxt.split('');
}

isOdd = (length, word) => {
    let index = Math.round((length / 2)) -1;
    let newIndex = word[index];  
    let toNumber = parseInt(newIndex)
    if (length % 2 > 0 && length > 1) {

        if( toNumber >=0 && toNumber <= 9){
            toNumber = toNumber *2;
            // console.log(toNumber);
        }
        word[index] = toNumber.toString()
        
        console.log(word);
        return word;
    }else {
        let firstHolder = word[0];
        let lastPlaceHolder = word[(length-1)];
        switch(firstHolder){
            case firstHolder === firstHolder.toUpperCase() :
                firstHolder = firstHolder.toLowerCase();
            case firstHolder === firstHolder.toLowerCase() :
                firstHolder = firstHolder.toUpperCase();
        }
        switch(lastPlaceHolder){
            case lastPlaceHolder === lastPlaceHolder.toUpperCase() :
                lastPlaceHolder = lastPlaceHolder.toLowerCase();
            case lastPlaceHolder === lastPlaceHolder.toLowerCase() :
                lastPlaceHolder = lastPlaceHolder.toUpperCase();
        }
        // length is even swap first and last letters and flip caps
        word[0] = lastPlaceHolder;
        word[(length-1)] = firstHolder;

        console.log(word);
        return word;
    }
}

replaceFives = word => {
    for (let i = 0; i < word.length; i++) {
        if(word[i] === 's' || word[i] === 'S'){
            word[i] = '5'
        }
        
    }
    // console.log(word)
    return word;
};


strengthenPasswords("NextCapitallly");






// const array = [2,3,4,5,6,7,8,9,]

// // function findNumber(arr, k) {
// //     let tester = arr.filter(i => { i === k});
// //     if(tester > 0){
// //         return "YES";
// //     }else {
// //         return "NO";
// //     }
// // }


// function oddNumbers(l, r) {
//     console.log(l)
//     console.log(r)
//     let newNumbers = [];
//     for(let i = l; i <= r; i++){
//         newNumbers.push(i);
//     }
//    return newNumbers.filter( i => i % 2);
// }

// oddNumbers(2,9);