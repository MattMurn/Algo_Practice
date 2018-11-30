// a closure is block scoped function that is executed inside of / returned from a parent function.
// inner function has access to 3 levels of variables. global, parent & inner.

close = num => {
    let twice = num * 2;
    console.log(this);
    test = () => {
        let ten_x = twice * 10;
        console.log(twice);
        console.log(ten_x);
        console.log(this);
    }
    test();
}

close(10);