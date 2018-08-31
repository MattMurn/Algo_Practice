function findOdd(A) {
    let holder = {};
    A.forEach(element => {
        holder[element] = (holder[element] || 0) + 1;
    });
    for(key in holder){
        if(holder[key] % 2 !== 0){
            return parseIntkey;
        }
    }
    return 0;
  }

//   findOdd([10])


const reverse = (str) => {
    let strArray = str.split('');
    let empty = [];
    for(let i = 0; i < strArray.length; i++){
        // console.log(strArray[i])
        let head = i;
        let tail = strArray.length - i;
        let temp = head;
        strArray[head] = strArray[temp];
        strArray[tail] = strArray[head];
        console.log(head, tail)
        
        // console.log(head, tail)
    }
    console.log(strArray)
    
}
reverse('hello')
//look into string alteration
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
//   console.log(reverseString("hello"));