function noBoringZeros(n) {
    // your code
    var num_arr = n.toString().split('');
    if(num_arr.length === 1){ 
      return parseInt(num_arr.join(''));
      }
    for(let i = num_arr.length-1; i > 0; i --){
        
        if(num_arr[i] === '0'){
            num_arr.splice(i, 1);
        }
        else{
            return parseInt(num_arr.join(''));
        }
    }
  }
  /*
  function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}
  */
  console.log(noBoringZeros(10200))