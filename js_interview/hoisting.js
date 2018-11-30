/* before js files compile, function declarations and global variables (var, not const / let) are hoisted to the top of
 the scope in which they are declared. This means that variables and functions that
 are hoisted can be declared after they are called. 
 
 function expression v function declaration hoisting. 
 expression - variable is hoisted, not function
 declaration - function is hoisted.

 variables & functions are hoisted to the top of the scope that they are declared in.
 */



print(test);
var test = 'hello world';
print(test);
function print(x){
     console.log(x);
     return x;
 }
 
 // ex
var color;
console.log(color);
color = 'blue';
console.log(color);

// tab 1
 
console.log(color);
 
var color = "blue";
 
console.log(color);
 
 
 
//tab 2
 
var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
 
 
 
// tab 3
 
console.log(getProduct(2, 3));
 
var getProduct = function(num1, num2) {
  return num1 * num2;
};
 
console.log(getProduct(2, 3));
 
 
 
// tab 4
 
console.log(getProduct(2, 3));
 
function getProduct(num1, num2) {
  return num1 * num2;
}
 
 
 
// tab 5
 
var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();