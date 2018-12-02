// currying a function. breakdown of functions
// into multiple subfunctions that take in 1 argument;
require('./triple_test')(3)(4);
tripleAdd = x => {
    return y => {
        return z => {
            console.log(y,z);
            return x + y + z;
        };
    };
};
// console.log(tripleAdd(10)(30)(40));

triple_one = (x, y, z) => {
    return x + y + z;
}

quad = x => {
    return y => {
        return (z,a) => {
            return x + y + z + a;
        }
    }
}

// console.log(quad(10)(30)(10,30));