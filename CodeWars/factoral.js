const zeros =  n => {
  let factoral = 1;
  while(n > 0){
    factoral *= n;
    n--;
  };
  let factoral_arr = factoral.toString().split('');
  console.log(factoral_arr);
  let count = 0;
  for(let i = factoral_arr.length-1; i >= 0; i--){
    if(factoral_arr[i] === '0'){
      count ++;
      factoral_arr.splice(i, 1);
    }
    else{
      return count;
    };
  }
}


  console.log(zeros(30));

