module.exports = stringer = string => {
    // return true;
   return string.split(" ").map(x => {
        return x.charAt(0).toUpperCase() + x.slice(1); 
    }).join('');


    // return this.split(" ").map(function(word){
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    //   }).join(" ");
}
const person = [{
    name: "mattt",
    profession: "full stack developer",
    age: 33
}]
test = arry => {
    const s = arry.map( element => {
        console.log(element)
    })
    // console.log(s);
}


test(person)


