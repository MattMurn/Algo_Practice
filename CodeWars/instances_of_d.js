/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. 
Square all numbers k (0 <= k <= n) between 0 and n.
 Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...)
 the function taking n and d as parameters and returning this count.
*/

//    Test.assertEquals(nbDig(5750, 0), 4700)

function nbDig(n, d) {
    // your code
    let instances_of_d = 0;
    for(let i =0; i <= n; i++){
        (i*i).toString().split('').forEach(element => {
            if(element == d){
                instances_of_d += 1;
            }
        })
    };
    return instances_of_d
}

console.log(nbDig(5750, 0));
