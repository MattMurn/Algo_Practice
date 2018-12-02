/* 
three ways to create objects in js

*/

let instant_obj = {
    prop_1: 'hello world',
    print: function() {
        console.log(this.prop_1);
    }
}
instant_obj.print();

function factory(prop_1) {
    return {
        prop_1: prop_1,
        print: function(){
            console.log(prop_1)
        }
    }
}
let fact = factory('factory world');
fact.print();
console.log(fact.prop_1);

let object_object = new Object();
object_object.prop_1 = 'hello world';
object_object.print = function(){
    console.log(this.prop_1);
}
object_object.print();