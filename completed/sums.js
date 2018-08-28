getSum = (a, b) => {
    let holder = []
   let arry = [ a, b].sort((a, b) => { return a - b});
   for(let i = arry[0]; i <= arry[1]; i++){
       holder.push(i);
   }
   return holder.reduce((current, next) => {return  current + next});
}
module.exports = getSum;


