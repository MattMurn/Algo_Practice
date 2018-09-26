function reverseLetter(str) {
    return str.split('')
    .filter(el =>  el.match(/^[a-z0-9]+$/i) !== null)
    .reverse()
    .join('');
    
  }


  console.log(reverseLetter('323*#(*$#)olleh'));