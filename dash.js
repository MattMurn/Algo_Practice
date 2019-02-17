const dashatize = num => {
    //Given a number, return a string with dash'-'marks before and after each odd integer,
    //but do not begin or end the string with a dash mark.
    let num_array = num.toString().split('');
    num_array.map((el,i)=> {
        if(el % 2 !== 0 && i !== 0 && i !== num_array.length -1 && el !== '-' ){
            console.log(el)
            // num_array.splice(i,-1,'-')
            // num_array[i] = `-${el}-`;
            console.log(i)
            num_array.splice(i+1,0, '-')
            // console.log(num_array);
        }
    })
    return num_array.join('');

  };

  console.log(dashatize(274));
  console.log(dashatize(6815));     