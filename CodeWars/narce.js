isNarcissistic = n =>{
    let int = n.toString().split('');
    int.forEach(el => int[int.indexOf(el)] = Math.pow(parseInt(el), 3));
    let check = int.reduce((x,y)=> x + y);
    return (check == n ? true : false);
}

console.log(isNarcissistic(154));
