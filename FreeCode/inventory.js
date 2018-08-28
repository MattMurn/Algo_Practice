function updateInventory(arr1, arr2) {
    function Comparator(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
      }
    // All inventory must be accounted for or you're fired!
    for(let j = 0; j <= arr1.length -1; j++){
        let firstCheck = arr1[j][1];
        for(let i = 0; i <= arr2.length-1; i++){
            if(arr2[i][1] === firstCheck){
                arr1[j][0] = arr1[j][0] + arr2[i][0]
                arr2.splice(i,1);
            }
        }
    }
    return arr1.concat(arr2).sort(compare);
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], curInv);
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

module.exports = updateInventory;