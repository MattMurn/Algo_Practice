function mutation(arr) {
//loop through first element and keep count
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for(let i = 0; i < first.length; i++){
        if(second.indexOf(first[i]) === -1){
            return false;
        };

    }
    return true;
}
  
  console.log(mutation(["hello", "Heasllo"]));