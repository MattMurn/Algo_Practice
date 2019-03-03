/*
f the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
*/
// Return an array
function fizzbuzz(n)
{
    let arr = []
    for(let i = 1; i <= n; i++){
        switch(true){
                case (i % 3 === 0) && (i % 5 === 0):
                arr.push("FizzBuzz");
                break;
                case i % 3 === 0:
                   arr.push("Fizz");
                  break;
                case i % 5 === 0:
                    arr.push("Buzz")
                    break;
              default:
                arr.push(i)
                  break;
            }
        }
    return arr;
}

console.log(fizzbuzz(10));