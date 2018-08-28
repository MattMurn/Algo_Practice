
gap = (g, m, n) => {
    // your code
    let holder = []
    function getPrime(number) {
        let isPrime = [];
        if(number < 2){
            holder.push(number);
        }
        for(let i = 2; i < number; i++){
            if(number % i == 0) {
                isPrime.push(number);
                
            }
        }
        if(isPrime.length === 0){
            holder.push(number);
        }
    }
    
    for(let i = m; i <= n; i++){
        getPrime(i)
    }
    
    // console.log(holder);
    for(let i = 0; i <= holder.length; i++){
        if((holder[i+1] - holder[i]) === g){
            console.log([holder[i], holder[i+1]])
             return [holder[i], holder[i+1]]
        }
    }
    console.log(null)
    return null
}

gap(10, 300, 400);



