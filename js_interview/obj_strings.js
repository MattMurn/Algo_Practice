var string1 = 'Tampa';
var string2 = string1;
//Tampa
string1 = 'Venice';

console.log(string2);

var person1 = {
    name: 'Alex', 
    age: 30
}
// either [object], or person1 obj
var person2 = person1;
person2.name = 'Kyle';

console.log(person1);