const dummy = "Pig latin is cool"
function pigIt(str){
    //Code here
    let pigify = "ay";
    let splitArray = str.split(" ");

    // console.log(splitArray)
    let final =[]
    splitArray.forEach(element => {
        // console.log(element)
        // console.log(/^[a-zA-Z]+$/.test(element))
        // let nonLetter = element.forEach( letter => {
            
        // })
        let first = element[0];
        let holder = element.slice(1,element.length);
        if(/^[a-zA-Z]+$/.test(element)){
            final.push(holder + first + pigify);
        }else {

            final.push(holder + first);
        }
        
        
        // console.log(final.toString().replace(/,/g, ' '))
        // console.log(element.split(", "));
        // console.log(finalSentence)
        
    });
    let finalSentence = final.toString().replace(/,/g, ' ');
    
    return(finalSentence)
    // console.log(final);
    // console.log(str.split(" ").slice())
//take in a string move the first letter of each word
// to the end of it, then add ay to the end of the word. 
//don't touch punctuation.
    
}
pigIt(dummy);
module.exports = pigIt;