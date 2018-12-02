/*
1. Describe what JSON format is.
    javascript object notation. it is a standardized way
    to pass(transfer) data in object form that is readable in JS. 1 of
    2 object notation(XML). Very important for retrieving data from
    APIs & servers to render things client side.
2. Delete the data types not permitted in JSON.
    data-types not allowed... functions & undefined
3. Replace placeholder-text with the corresponding 
data types, properly formatted as JSON.

*/

const my_object = {
    'myString': 'string here', 
    'myNumber': 677,
    'myNull': null,
    'myBoolean': false, 
    'myArray': [13,4,5,6,'some_word'],
    'myObj': {
        'this_': 'is a string',
        'that_': 'is an object'
    }
}