function lenR(x) {
    let count = 0;
    function recurse(start) {

        (start === x.length) ? 0 : 
        (()=> {
            count += 1;
            recurse(start + 1);
        })();
    }
    recurse(0);
    return count;
}

console.log(lenR([1,3,4]));