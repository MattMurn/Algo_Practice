//A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    let value_array = value.toString().split('');
    let mulitper = value_array.length;
    let final_value = value_array.map((el, i) => {
        return Math.pow(parseInt(el), mulitper);
    })
    .reduce((start, next) => {
        return start + next;
    })
    return final_value === value;
}

console.log(narcissistic(153));