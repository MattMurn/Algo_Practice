// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
// create an object with all instances / unique numbers, set count property to 0;
// condition that either creates new object proper or adds to count;
// map through and filter for % 2 to return a pair of shoes, return 
    let final_pairs = 0;
    let pairs = {};
    ar.map((element, i) => {
        if(pairs[element]){
            pairs[element].count ++;
        }
        else {
            pairs[element] = {}
            pairs[element].count = 1;
        }
    })
    for(let key in pairs){
        if(pairs[key].count >= 2){
            let pair_count = Math.floor(pairs[key].count / 2);
            final_pairs += pair_count
        }
    }
    return final_pairs;
}

console.log(sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
