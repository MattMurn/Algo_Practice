let test = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17";
let ind = "01|15|59";


function stat(strg) {
    const first_split = ',';
    const second_split = '|';
    let stats = []
    let obj = {}
    const final = strg.split(first_split).reduce((newArr, element, i)=> {
        let key = element;
        obj[(key)] = null;
        let subArr = element.split(second_split);
        obj[key] = convertTime(subArr);
        newArr[i] = convertTime(subArr);
        newArr.sort((a,b)=> b - a)
        stats[0] = convertBack(newArr[0] - newArr[newArr.length-1]).toString();
        stats[1] = convertBack((newArr.reduce((prev, cur) => prev + cur,0)) /newArr.length);
        stats[2] = convertBack(getMedian(newArr)).toString();
        
        return newArr;
    }, [])
    console.log(obj)
    return (`Range:  ${replace(stats[0])} Average: ${replace(stats[1])} Median: ${replace(stats[2])}`);
}
Number.prototype.pad = function(size){
    let s = String(this);
    if(s.length < 2){s = '0' + s};
    return s;
}

function getMedian(num) {
    let mid = Math.floor(num.length / 2) -1;
    if(num.length % 2 === 0){
        return(num[mid]+ num[mid+1])/2;
    }
    else{
        return num[mid+1]; 
    }
}
function convertTime(num) {
    return parseInt(num[0] * 60) + parseInt(num[1]) + parseFloat(num[2]/60);
}
function convertBack(num) {
    return [(Math.floor(num / 60)).pad(2), Math.floor(num % 60).pad(2), Math.round((num % 1)*60).pad(2)]
}
function replace(input) {
    return input.toString().replace(/,/g, '|');
}

stat(test);