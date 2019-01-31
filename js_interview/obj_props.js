// in object a, setting property b = 200, setting property c = 400;
// actaully js is trying to place an object as a key, which is coerced into
// a string, so a['object Object'] return 400 b/c a[b] & a[c] && a['object Object];
const a = {};
const b = { name: 'b'};
const c = { name: 'c'};

a[b] = 200;
a[c] = 400;
// a['object Object'] = 200;
// a['object Object'] = 400;


console.log(a);