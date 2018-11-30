let singleton = (function(){
    let instance;
    function init(){
        let privateVar = Math.random();
        return {
            publicMethod: function() {
                return privateVar;
            }
        }
    }
    return {
        getInstance:  function() {
            if(!instance){
                return init();
            }
            return instance;
        }
    }
})();
let single = singleton;
// console.log(single.publicMethod());

console.table(['stabel', 'hello'])
// console.log(user.name);