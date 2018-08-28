function inAscOrder(arr) {
    let answer = true;
    arr.forEach((element, i) => {
        if(arr[i] > arr[i+ 1]){
            answer = false;
        }
    })
    return answer;
  }

  inAscOrder([3,4,5,2,1])