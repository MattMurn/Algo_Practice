const reverser = num => {
    return num.toString().split('').reverse().join('');
}

console.log(reverser(1237843439));


function reversify(num){
    var stringFinal = '';
    var stringedNum = num.toString();
    for(var i = stringedNum.length -1; i >= 0; i--){
        stringFinal += stringedNum[i];
    }
    return stringFinal;
}

console.log(reversify(1237843439))