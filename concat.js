    // solve = s => {
    //     const vowelList = 'aeiouAEIOU'.split('');
    //     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    //     let noVowel =s.split('');
    //     let subString = [];
    //     let sub = [];
    //     let previous = null;
    //     /* loop through noVowel array.
    //         use conditional for to check if is !consonant
    //         have substring - now run through 
    //     */
    //     for(let i = 0; i <= noVowel.length-1; i++){
    //         if(vowelList.indexOf(noVowel[i]) !== -1){
    //             subString.push(sub);
    //             sub =[];
    //         } else if(i === noVowel.length -1){
    //             sub.push(noVowel[i])
    //             subString.push(sub)
    //             // console.log("last element")
    //         } else {
    //             sub.push(noVowel[i])
    //         }
    //     }
    //     let final = subString.filter(el => el.length > 0);

    //     final.forEach(element => {
    //         for(let n = 0; n <= element.length-1; n++){
    //             // console.log(n)
    //             for(let j = 0; j < alphabet.length-1; j++){
    //                 // console.log(i)
    //                 if(element[n] === alphabet[j]){
    //                     element[n] = j
    //                 }
        
    //             }
    //         }
    //          element.reduce((prev, next) => prev + next)
    //         // }
    //         console.log(element)
    //         // console.log()
    //         // return element;
    //     });
    //         console.log(final) 
    //   };

    //   solve('aschtasch')
