fruit = (reels, spins) => {
    let scoring = {
        Wild: 10,
        Star: 9,
        Bell:8,
        Shell: 7,
        Seven: 6,
        Cherry: 5,
        Bar: 4,
        King: 3,
        Queen: 2, 
        Jack: 1
    }
    let one = reels[0][spins[0]]
    let two = reels[1][spins[1]]
    let three = reels[2][spins[2]]
    let compare = [one, two, three]
    let count = {};
    let counter = 0;
    compare.forEach( x => {
        count[x] = (count[x] || 0) +1;
//         if(count[x] > 1){
//             counter ++;
//         }
    });
    for(prop in count){
        counter ++;
        if (count[prop] == 3){
            return scoring[prop] * 10;
        }else if(count['Wild'] == 2 || count[prop] == 2){
            console.log("Two wilds and a third")
            console.log(scoring['Wild'])
            return scoring['Wild'];
        }else if(count[prop] == 2 && count[prop] !== 'Wild' && compare.includes('Wild') ){
            console.log("Two of a kind and a Wild")
            console.log(scoring[prop]*2)
            return scoring[prop] * 2;
        }else if(count[prop] == 2){
            console.log("Two of a kind")
            console.log(scoring[prop])
            return scoring[prop]
        }
        else if(counter === 3){
            console.log("None the same")
            return 0
        }
    }
}



spin = [0, 2, 2];
spin2 = [1,1,6];
spin3 = [1,0,1];
spin4 = [1,1,1];
spin5 = [1,6,0];
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];


fruit([reel1, reel2, reel3], spin);
// fruit([reel1, reel1, reel1], spin2);
// fruit([reel1, reel1, reel1], spin4);
// fruit([reel1, reel1, reel1], spin5);
module.exports = fruit;