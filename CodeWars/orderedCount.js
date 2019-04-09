var orderedCount = function (text) {
    // Implement me!
    // count the number of different letters, and return an array.
    let hash = {}
    let array_ = [];
    text.split("").map((element, i) => {
        if(!hash[element]){
            hash[element] = {
                count: 1
            }
        }
        else hash[element].count += 1;
    })
    for(let key in hash){
        console.log(typeof(key));
        array_.push([key, hash[key].count])
    }
    console.log(array_);
    return array_;
  }

  orderedCount("abracadabra");
  orderedCount("212");