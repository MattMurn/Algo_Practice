
const list = [1,'a','b',0,15]

function filter_list(list) {
    // Return a new array with the strings filtered out
 return list.filter(data => (typeof data) != 'string')
    
}


module.exports = filter_list;