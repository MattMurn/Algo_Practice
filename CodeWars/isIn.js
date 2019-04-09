const checkIn = (str, sub) => {
    // if(sub[sub.length-1] === str[str.length-1]){
    //     return true;
    // }
    // return false;
        if(str.indexOf(sub) === (str.length - sub.length)){
            return true;
        }
        return false;
}

// console.log(checkIn('abc', 'bc'));
// console.log(checkIn('abc', 'd'));
// console.log(checkIn('this is a test to see if it works', 'works'));


const breakIn = num => {
    let hash = [];
    for(let i = 1; i < num; i ++){
        hash.push("#");
        console.log(hash.join(""));
    }
}

breakIn(10);